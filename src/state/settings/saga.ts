import { take, takeEvery, select, put, call } from "redux-saga/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { REHYDRATE } from "redux-persist"

import {
    RootStateType,
    drawTrayImg as drawTrayImgAction,
    currentStageDurationSelector,
    currentStageSelector,
} from "@state"
import { removeTray, drawTrayImg as drawTrayImgService } from "@services"

import {
    setVolume,
    setAlwaysOnTop,
    setDesktopNotifications,
    setMinimizeToTray,
    ISettings,
} from "./slice"
import { setSfxVolume } from "./sfx"

const remote = window.require("electron").remote

export function* setVolumeWatcher() {
    while (true) {
        const action: PayloadAction<number> = yield take(setVolume)
        setSfxVolume(action.payload)
    }
}

export function* alwaysOnTopWatcher() {
    while (true) {
        const action: PayloadAction<boolean> = yield take(setAlwaysOnTop)
        remote.getCurrentWindow().setAlwaysOnTop(action.payload)
    }
}

export function* desktopNotificationsWatcher() {
    while (true) {
        const action: PayloadAction<boolean> = yield take(
            setDesktopNotifications
        )
        // electron api
    }
}

export function* minimizeToTrayWatcher() {
    while (true) {
        const action: PayloadAction<boolean> = yield take(setMinimizeToTray)

        if (action.payload === true) {
            yield put(drawTrayImgAction())
        } else {
            yield call(removeTray)
        }
    }
}

function* bottstrapReducerWorker() {
    const {
        volume,
        alwaysOnTop,
        desktopNotifications,
        minimizeToTray,
    }: ISettings = yield select((state: RootStateType) => state.settings)

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
