import { take, takeEvery, select } from "redux-saga/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { REHYDRATE } from "redux-persist"

import { RootStateType } from "@state"

import {
    setVolume,
    setAlwaysOnTop,
    setDesktopNotifications,
    setMinimizeToTray,
    ISettings,
} from "./slice"
import { setSfxVolume } from "./sfx"

export function* setVolumeWatcher() {
    while (true) {
        const action: PayloadAction<number> = yield take(setVolume)
        setSfxVolume(action.payload)
    }
}

export function* alwaysOnTopWatcher() {
    while (true) {
        const action: PayloadAction<boolean> = yield take(setAlwaysOnTop)
        // electron api
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
        // electron api
    }
}

function* bottstrapReducerWorker() {
    const {
        volume,
        alwaysOnTop,
        desktopNotifications,
        minimizeToTray,
    }: ISettings = yield select((state: RootStateType) => state.settings)

    setSfxVolume(volume)
}

export function* bottstrapReducerWatcher() {
    yield takeEvery(REHYDRATE, bottstrapReducerWorker)
}
