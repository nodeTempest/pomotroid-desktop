import { eventChannel, END } from "redux-saga"
import {
    call,
    fork,
    put,
    take,
    cancel,
    cancelled,
    select,
} from "redux-saga/effects"

import { RootState } from "@state"

import {
    startCountdown,
    pauseCountdown,
    updateCountdown,
    countOver,
} from "./slice"

function* countdownTask(msecs: number) {
    const countdown = () =>
        eventChannel(emit => {
            const counter = setInterval(() => {
                msecs -= 10
                if (msecs % 1000 === 0) {
                    emit(msecs >= 0 ? msecs : END)
                }
            }, 10)

            return () => {
                clearInterval(counter)
            }
        })

    const chan = yield call(countdown)

    try {
        while (true) {
            const msecs = yield take(chan)
            yield put(updateCountdown(msecs))
        }
    } finally {
        if (yield cancelled()) {
            chan.close()
            yield put(updateCountdown(msecs))
        } else {
            yield put(countOver())
        }
    }
}

export function* watchCountdown() {
    while (true) {
        yield take(startCountdown)

        const msecs: number = yield select(
            (state: RootState) => state.app.remainingTime
        )
        const task = yield fork(countdownTask, msecs)

        const { type } = yield take([pauseCountdown, countOver])

        if (type === pauseCountdown.toString()) {
            yield cancel(task)
        }
    }
}
