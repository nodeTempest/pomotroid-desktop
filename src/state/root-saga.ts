import { all, spawn, call } from "redux-saga/effects"
import { channelSaga, startSaga, stopSaga } from "./countdown/saga"

export default function*() {
    const sagas = [channelSaga, startSaga, stopSaga]

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
