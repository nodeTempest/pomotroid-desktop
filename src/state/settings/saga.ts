import { takeEvery } from "redux-saga/effects"
import { PayloadAction } from "@reduxjs/toolkit"

import { setVolume } from "./slice"
import { sfx } from "./sfx"

function* setVolumeWorker(action: PayloadAction<number>) {
    for (const key in sfx) {
        if (key) {
            sfx[key].volume = action.payload / 100
        }
    }
}

export function* setVolumeWatcher() {
    yield takeEvery(setVolume, setVolumeWorker)
}
