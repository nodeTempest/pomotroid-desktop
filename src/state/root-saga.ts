import { all, spawn, call } from "redux-saga/effects"
import {
    cdChannel,
    watchCdStart,
    watchCdStop,
    watchCdReset,
    watchCdRestart,
} from "./countdown/saga"

export default function*() {
    const sagas = [
        cdChannel,
        watchCdStart,
        watchCdStop,
        watchCdReset,
        watchCdRestart,
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
