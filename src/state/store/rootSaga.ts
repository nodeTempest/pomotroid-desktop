import { all, spawn, call } from "redux-saga/effects"
import * as appSagas from "@state/app/saga"

export function* rootSaga() {
    const sagas = Object.values(appSagas)

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
