import { combineReducers } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import { appReducer, settingsReducer } from "@state"

const appPersistConfig = {
    key: "app",
    storage,
    whitelist: ["durations", "stagesPattern"],
}

export const rootReducer = combineReducers({
    app: persistReducer(appPersistConfig, appReducer),
    settings: settingsReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>
