import { all, spawn, call } from "redux-saga/effects"
import {
    cdChannel,
    watchCdStart,
    watchCdStop,
    watchCdReset,
    watchCdRestart,
    watchUpdateCd,
} from "./countdown/saga"

import {
    watchStagesDurationChange,
    watchNextStage,
    watchSetDefaults,
} from "./stages/saga"

export default function*() {
    const sagas = [
        cdChannel,
        watchCdStart,
        watchCdStop,
        watchCdReset,
        watchCdRestart,
        watchUpdateCd,
        watchStagesDurationChange,
        watchNextStage,
        watchSetDefaults,
    ]

    yield all(
        sagas.map(saga =>
            spawn(function*() {
                while (true) {
                    try {
                        yield call(saga)
                        break
                    } catch (e) {
                        console.log(e)
                    }
                }
            })
        )
    )
}
