import { take, put, select } from "redux-saga/effects"

import { resetCd } from "../countdown/actions"

import { currentStageSelector, currentStageDurationsSelector } from "./reducer"
import { stagesActions } from "./actions"

export function* watchStagesDurationChange() {
    while (true) {
        const { payload: durations } = yield take(stagesActions.changeDuration)

        const currentStage = yield select(currentStageSelector)
        const updatingCurrentStage = currentStage in durations

        if (updatingCurrentStage) {
            const duration = yield select(currentStageDurationsSelector)
            yield put(resetCd({ duration }))
        }
    }
}

export function* watchSetDefaults() {
    while (true) {
        yield take(stagesActions.setDefaults)
        const duration = yield select(currentStageDurationsSelector)
        yield put(resetCd({ duration }))
    }
}
