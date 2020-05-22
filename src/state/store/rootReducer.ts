import { combineReducers } from "@reduxjs/toolkit"

import { appReducer } from "@state/app"

export const rootReducer = combineReducers({ app: appReducer })

export type RootStateType = ReturnType<typeof rootReducer>
