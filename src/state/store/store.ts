import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"

import { rootReducer } from "./rootReducer"
import { rootSaga } from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware({
            immutableCheck: true,
            serializableCheck: true,
        }),
        sagaMiddleware,
    ],
})

sagaMiddleware.run(rootSaga)

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootReducer', () => {
//     const newRootReducer = require('./rootReducer').default
//     store.replaceReducer(newRootReducer)
//   })
// }

export type AppDispatch = typeof store.dispatch
