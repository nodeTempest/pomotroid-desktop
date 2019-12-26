import { createStore, compose, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./root-saga"
import rootReducer from "./root-reducer"

const sagaMiddleware = createSagaMiddleware()

const composeEnhancer =
    (process.env.NODE_ENV !== "production" &&
        (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]) ||
    compose

const store = createStore(
    rootReducer,
    {},
    composeEnhancer(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
