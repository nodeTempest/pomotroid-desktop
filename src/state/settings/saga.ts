import { take, takeEvery, select } from "redux-saga/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { REHYDRATE } from "redux-persist"

import { RootStateType } from "@state"

import { setVolume } from "./slice"
import { setSfxVolume } from "./sfx"

export function* setVolumeWatcher() {
    while (true) {
        const action: PayloadAction<number> = yield take(setVolume)
        setSfxVolume(action.payload)
    }
}

function* bottstrapReducerWorker() {
    const volume: number = yield select(
        (state: RootStateType) => state.settings.volume
    )

    setSfxVolume(volume)
}

export function* bottstrapReducerWatcher() {
    yield takeEvery(REHYDRATE, bottstrapReducerWorker)
}
