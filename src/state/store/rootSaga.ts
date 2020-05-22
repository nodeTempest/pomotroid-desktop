import { all, spawn, call } from "redux-saga/effects"
import {
    watchCountdown,
    watchNextStage,
    watchResetCurrentStage,
} from "@state/app"

export function* rootSaga() {
    const sagas = [watchCountdown, watchNextStage, watchResetCurrentStage]

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
