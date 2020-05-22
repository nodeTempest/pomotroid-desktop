import { eventChannel, END } from "redux-saga"
import {
    call,
    fork,
    put,
    take,
    takeEvery,
    cancel,
    cancelled,
    select,
} from "redux-saga/effects"
import { PayloadAction } from "@reduxjs/toolkit"

import { RootStateType } from "@state"

import {
    startTimer,
    clearTimer,
    timerIsOver,
    startCountdown,
    pauseCountdown,
    updateRemainingTime,
    nextStage,
    resetCurrentStage,
} from "./slice"

function* timerWorker(msecs: number) {
    const timer = () =>
        eventChannel(emit => {
            const counter = setInterval(() => {
                msecs -= 10
                if (msecs % 1000 === 0) {
                    emit(msecs >= 0 ? msecs : END)
                }
            }, 10)

            return () => clearInterval(counter)
        })

    const chan = yield call(timer)

    try {
        while (true) {
            const msecs = yield take(chan)
            yield put(updateRemainingTime(msecs))
        }
    } finally {
        if (yield cancelled()) {
            chan.close()
            yield put(updateRemainingTime(msecs))
        } else {
            yield put(timerIsOver())
        }
    }
}

export function* timerWatcher() {
    while (true) {
        const action: PayloadAction<number> = yield take(startTimer)
        const task = yield fork(timerWorker, action.payload)

        const { type } = yield take([clearTimer, timerIsOver])
        if (type === clearTimer.toString()) {
            yield cancel(task)
        }
    }
}

export function* timerIsOverWatcher() {
    while (true) {
        yield take(timerIsOver)
        yield put(nextStage())
    }
}

export function* countdownFlow() {
    while (true) {
        yield take(startCountdown)
        const remainingTime: number = yield select(
            (state: RootStateType) => state.app.remainingTime
        )

        yield put(startTimer(remainingTime))
        yield take(pauseCountdown)
        yield put(clearTimer())
    }
}

function* resetCurrentStageWorker() {
    const paused: boolean = yield select(
        (state: RootStateType) => state.app.paused
    )

    if (!paused) {
        const remainingTime: number = yield select(
            (state: RootStateType) => state.app.remainingTime
        )
        yield put(clearTimer())
        yield put(startTimer(remainingTime))
        yield put(updateRemainingTime(remainingTime))
    }
}

export function* resetCurrentStageWatcher() {
    yield takeEvery(resetCurrentStage, resetCurrentStageWorker)
}

export function* nextStageWatcher() {
    while (true) {
        yield take(nextStage)
        yield put(resetCurrentStage())
    }
}
