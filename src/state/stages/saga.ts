import { take, put, call, select } from "redux-saga/effects"

import { resetCd, restartCd } from "../countdown/actions"
import { IRootState } from "../root-reducer"

import { currentStageSelector, currentStageDurationsSelector } from "./reducer"
import { stagesActions } from "./actions"

export function* watchStagesDurationChange() {
    while (true) {
        const { payload: durations } = yield take(stagesActions.changeDuration)
        const currentStage = yield select(currentStageSelector)
        const updatingCurrentStage = currentStage in durations

        if (updatingCurrentStage) {
            yield put(resetCd())
        }
    }
}

export function* watchNextStage() {
    while (true) {
        yield take(stagesActions.nextStage)

        const state: IRootState = yield select()
        const currentStageDuration = currentStageDurationsSelector(state)
        const cdRunning = state.cd.isRunning

        cdRunning
            ? yield put(restartCd({ duration: currentStageDuration }))
            : yield put(resetCd({ duration: currentStageDuration }))
    }
}

export function* watchSetDefaults() {
    while (true) {
        yield take(stagesActions.setDefaults)
        const currentStageDuration = yield select(currentStageDurationsSelector)
        yield put(resetCd({ duration: currentStageDuration }))
    }
}
