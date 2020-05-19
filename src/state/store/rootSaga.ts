import { all, spawn, call } from "redux-saga/effects"
import { watchCountdown } from "@state/app"

export function* rootSaga() {
    const sagas = [watchCountdown]

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
