import { AnyAction, Reducer, combineReducers } from "redux"
import cdReducer from "./countdown/reducer"
import { ICdState } from "../custom_modules/countdown"
import stagesReducer, { IStagesState } from "./stages/reducer"

export interface IRootState {
    cd: ICdState
    stages: IStagesState
}

const rootReducer: Reducer<IRootState> = combineReducers<IRootState>({
    cd: cdReducer,
    stages: stagesReducer,
})

export default rootReducer
