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
import { RootStateType, drawTrayImg } from "@state"
import { playStageSfx, showNotification } from "@services"

import {
    startCountdown,
    pauseCountdown,
    updateRemainingTime,
    nextStage,
    resetCurrentStage,
    changeDuration,
    IChangeDuration,
    changeTotalRounds,
    setDefaults,
    IApp,
} from "./slice"
import { startTimer, clearTimer, timerIsOver } from "./middlewareActions"
import { currentStageSelector, currentStageDurationSelector } from "./selectors"

const timerChannel = (ms: number) => {
    return eventChannel(emit => {
        const timerId = setInterval(() => {
            ms -= 1000
            emit(ms >= 0 ? ms : END)
        }, 1000)

        return () => clearInterval(timerId)
    })
}

function* timerWorker(ms: number) {
    const chan = yield call(timerChannel, ms)

    try {
        while (true) {
            const ms = yield take(chan)
            yield put(updateRemainingTime(ms))
        }
    } finally {
        if (yield cancelled()) {
            chan.close()
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
    const { paused, remainingTime }: IApp = yield select(
        (state: RootStateType) => state.app
    )

    if (!paused) {
        yield put(clearTimer())
        yield put(startTimer(remainingTime))
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

function* changeDurationWorker(action: PayloadAction<IChangeDuration>) {
    const { stage } = action.payload
    const currenStage: ReturnType<typeof currentStageSelector> = yield select(
        currentStageSelector
    )
    if (currenStage === stage) {
        yield put(pauseCountdown())
    }
}

export function* changeDurationWatcher() {
    yield takeEvery(changeDuration, changeDurationWorker)
}

function* changeTotalRoundsWorker() {
    const paused: boolean = yield select(
        (state: RootStateType) => state.app.paused
    )

    if (paused) {
        yield put(clearTimer())
    }
}

export function* changeTotalRoundsWatcher() {
    yield takeEvery(changeTotalRounds, changeTotalRoundsWorker)
}

export function* setDefaultsWatcher() {
    while (true) {
        yield take(setDefaults)
        yield put(clearTimer())
    }
}

export function* drawTrayImgFlow() {
    while (true) {
        yield take([
            updateRemainingTime,
            nextStage,
            resetCurrentStage,
            changeDuration,
            changeTotalRounds,
            setDefaults,
        ])

        const minimized: boolean = yield select(
            (state: RootStateType) => state.settings.minimizeToTray
        )

        if (minimized) {
            yield put(drawTrayImg())
        }
    }
}

export function* playStageSfxFlow() {
    while (true) {
        yield take(nextStage)
        const currentStage = yield select(currentStageSelector)
        yield call(playStageSfx, currentStage)
    }
}

export function* notificationFlow() {
    while (true) {
        yield take(nextStage)
        const notificationsAllowed: boolean = yield select(
            (state: RootStateType) => state.settings.desktopNotifications
        )

        if (notificationsAllowed) {
            const currentStage = yield select(currentStageSelector)
            const currentStageDuration = yield select(
                currentStageDurationSelector
            )

            yield call(showNotification, currentStage, currentStageDuration)
        }
    }
}
