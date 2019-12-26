import { combineReducers } from "redux"
import cdReducer from "./countdown/reducer"
import { ICdState } from "../custom_modules/countdown"

export interface ICombinedState {
    cd: ICdState
}

export default combineReducers<ICombinedState>({
    cd: cdReducer,
})
