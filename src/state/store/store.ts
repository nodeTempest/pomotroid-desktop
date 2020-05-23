import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist"

import { rootReducer } from "./rootReducer"
import { rootSaga } from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware({
            immutableCheck: true,
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
        sagaMiddleware,
    ],
})

export const persistor = persistStore(store)

let sagaTask = sagaMiddleware.run(rootSaga)

if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./rootReducer", () => {
        store.replaceReducer(rootReducer)
    })
    module.hot.accept("./rootSaga", () => {
        sagaTask.cancel()
        sagaTask.toPromise().then(() => {
            sagaTask = sagaMiddleware.run(rootSaga)
        })
    })
}

export type AppDispatch = typeof store.dispatch
