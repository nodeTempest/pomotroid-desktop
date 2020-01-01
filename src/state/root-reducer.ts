import { Reducer, combineReducers } from "redux"
import cdReducer, { IExtraCdState } from "./countdown/reducer"
import { ICdState } from "../custom_modules/countdown"
import stagesReducer, { IStagesState } from "./stages/reducer"

export interface IRootState {
    cd: ICdState & IExtraCdState
    stages: IStagesState
}

const rootReducer: Reducer<IRootState> = combineReducers<IRootState>({
    cd: cdReducer,
    stages: stagesReducer,
})

export default rootReducer
