import { Reducer, combineReducers } from "redux"
import { cdReducer, IExtraCdState } from "./countdown/reducer"
import { ICdState } from "@modules"
import { stagesReducer, IStagesState } from "./stages/reducer"

export interface IRootState {
    cd: ICdState & IExtraCdState
    stages: IStagesState
}

export const rootReducer: Reducer<IRootState> = combineReducers<IRootState>({
    cd: cdReducer,
    stages: stagesReducer,
})
