import { take, put, call, select } from "redux-saga/effects"
import { eventChannel } from "redux-saga"

import { ICdState } from "@modules"
import { IRootState } from "@state/root-reducer"
import { stagesActions, nextStage } from "@state/stages/actions"
import { currentStageDurationsSelector } from "@state/stages/reducer"

import { updateCd, resetCd, restartCd, CdActions } from "./actions"
import { cd } from "./cd"

const createCdChannel = () =>
    eventChannel(emit => {
        const stateChangeHandler = (state: ICdState) => emit(state)

        cd.on("stateChange", stateChangeHandler)

        return () => cd.off("stateChange", stateChangeHandler)
    })

export function* cdChannel() {
    const cdChannel = yield call(createCdChannel)
    while (true) {
        const newstate: ICdState = yield take(cdChannel)
        yield put(updateCd(newstate))
    }
}

export function* watchCdStart() {
    while (true) {
        yield take(CdActions.start)
        yield call([cd, cd.start])
    }
}

export function* watchCdStop() {
    while (true) {
        yield take(CdActions.stop)
        yield call([cd, cd.stop])
    }
}

export function* watchCdRestart() {
    while (true) {
        const { payload } = yield take(CdActions.restart)
        yield call([cd, cd.restart], payload)
    }
}

export function* watchCdReset() {
    while (true) {
        const { payload } = yield take(CdActions.reset)
        yield call([cd, cd.reset], payload)
    }
}

export function* watchUpdateCd() {
    while (true) {
        yield take(CdActions.stateChange)
        const state: IRootState = yield select()

        if (state.cd.over) {
            yield put(nextStage())
        }
    }
}

export function* watchNextStage() {
    while (true) {
        yield take(stagesActions.nextStage)

        const duration = yield select(currentStageDurationsSelector)
        yield put(restartCd({ duration }))
    }
}
