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
import { currentStageDurationSelector } from "./selectors"

function* timerWorker(ms: number) {
    const timer = () => {
        return eventChannel(emit => {
            const counter = setInterval(() => {
                ms -= 10
                if (ms % 1000 === 0) {
                    emit(ms >= 0 ? ms : END)
                }
            }, 10)

            return () => clearInterval(counter)
        })
    }

    const chan = yield call(timer)

    try {
        while (true) {
            const ms = yield take(chan)
            yield put(updateRemainingTime(ms))
        }
    } finally {
        if (yield cancelled()) {
            chan.close()
            yield put(updateRemainingTime(ms))
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
    const currentStageDuration: number = yield select(
        currentStageDurationSelector
    )

    if (!paused) {
        yield put(clearTimer())
        yield put(startTimer(currentStageDuration))
    }

    yield put(updateRemainingTime(currentStageDuration))
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
