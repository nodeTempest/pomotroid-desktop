import { take, takeEvery, select, put, call } from "redux-saga/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { REHYDRATE } from "redux-persist"

import {
    RootStateType,
    currentStageDurationSelector,
    currentStageSelector,
} from "@state"
import {
    removeTray as removeTrayService,
    drawTrayImg as drawTrayImgService,
} from "@services"

import {
    setVolume,
    setAlwaysOnTop,
    setMinimizeToTray,
    ISettings,
} from "./slice"
import {
    setSfxVolume,
    setAlwaysOnTop as setAlwaysOnTopService,
} from "@services"
import {
    drawTrayImg as drawTrayImgAction,
    removeTray as removeTrayAction,
} from "./middlewareActions"

export function* setVolumeWatcher() {
    while (true) {
        const action: PayloadAction<number> = yield take(setVolume)
        yield call(setSfxVolume, action.payload)
    }
}

export function* alwaysOnTopWatcher() {
    while (true) {
        const action: PayloadAction<boolean> = yield take(setAlwaysOnTop)
        yield call(setAlwaysOnTopService, action.payload)
    }
}

export function* minimizeToTrayWatcher() {
    while (true) {
        const action: PayloadAction<boolean> = yield take(setMinimizeToTray)

        if (action.payload === true) {
            yield put(drawTrayImgAction())
        } else {
            yield put(removeTrayAction())
        }
    }
}

function* bottstrapReducerWorker() {
    const { volume, alwaysOnTop, minimizeToTray }: ISettings = yield select(
        (state: RootStateType) => state.settings
    )

    yield put(setVolume(volume))
    yield put(setAlwaysOnTop(alwaysOnTop))
    yield put(setMinimizeToTray(minimizeToTray))
}

export function* bottstrapReducerWatcher() {
    yield takeEvery(REHYDRATE, bottstrapReducerWorker)
}

function* drawTrayImgWorker() {
    const remainingTime: number = yield select(
        (state: RootStateType) => state.app.remainingTime
    )
    const currentStage: ReturnType<typeof currentStageSelector> = yield select(
        currentStageSelector
    )
    const currentStageDuration: ReturnType<typeof currentStageDurationSelector> = yield select(
        currentStageDurationSelector
    )

    yield call(
        drawTrayImgService,
        currentStage,
        (remainingTime / currentStageDuration) * 360
    )
}

export function* drawTrayImgWatcher() {
    yield takeEvery(drawTrayImgAction, drawTrayImgWorker)
}

function* removeTrayWorker() {
    yield call(removeTrayService)
}

export function* removeTrayWatcher() {
    yield takeEvery(removeTrayAction, removeTrayWorker)
}
