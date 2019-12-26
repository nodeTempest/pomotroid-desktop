import { take, put, call } from "redux-saga/effects"
import { eventChannel } from "redux-saga"
import { ICdState } from "../../custom_modules/countdown"
import { updateCd, CdActions } from "./actions"
import cd from "./cd"

const createCdChannel = () =>
    eventChannel(emit => {
        const stateChangeHandler = (state: ICdState) => emit(state)

        cd.on("stateChange", stateChangeHandler)

        return () => cd.off("stateChange", stateChangeHandler)
    })

export function* channelSaga() {
    const cdChannel = yield call(createCdChannel)
    while (true) {
        const newstate: ICdState = yield take(cdChannel)
        yield put(updateCd(newstate))
    }
}

export function* startSaga() {
    while (true) {
        yield take(CdActions.start)
        yield call([cd, cd.start])
    }
}

export function* stopSaga() {
    while (true) {
        yield take(CdActions.stop)
        yield call([cd, cd.stop])
    }
}

// function* saga2() {
//     while (true) {
//         const {
//             payload: { duration },
//         } = yield take("STAGE / NEXT")
//         cd.reset(duration)
//         cd.start()
//     }
// }
