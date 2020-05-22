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

import {
    startCountdown,
    pauseCountdown,
    updateCountdown,
    nextStage,
    resetCurrentStage,
} from "./slice"
import { currentStageDurationSelector } from "./selectors"

function* countdownWorker(msecs: number) {
    const countdown = () =>
        eventChannel(emit => {
            const counter = setInterval(() => {
                msecs -= 10
                if (msecs % 1000 === 0) {
                    emit(msecs >= 0 ? msecs : END)
                }
            }, 10)

            return () => clearInterval(counter)
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
            yield put(nextStage())
        }
    }
}

function* nextStageWorker() {
    const newStageDuration: ReturnType<typeof currentStageDurationSelector> = yield select(
        currentStageDurationSelector
    )

    yield put(startCountdown(newStageDuration))
}

function* resetCurrentStageWorker() {
    const currentStageDuration: ReturnType<typeof currentStageDurationSelector> = yield select(
        currentStageDurationSelector
    )
    yield put(startCountdown(currentStageDuration))
}

export function* watchCountdown() {
    while (true) {
        const action: PayloadAction<number> = yield take(startCountdown)
        const task = yield fork(countdownWorker, action.payload)
        yield put(updateCountdown(action.payload))

        yield take([pauseCountdown, nextStage, resetCurrentStage])
        yield cancel(task)
    }
}

export function* watchNextStage() {
    yield takeEvery(nextStage, nextStageWorker)
}

export function* watchResetCurrentStage() {
    yield takeEvery(resetCurrentStage, resetCurrentStageWorker)
}
