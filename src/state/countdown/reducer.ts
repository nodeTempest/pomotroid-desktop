import { ICdState } from "../../custom_modules/countdown"
import cd from "./cd"
import { CdActions, CdActionsType } from "./actions"
import { createReducer } from "../common"

export interface IExtraCdState {
    stoppedByUser: boolean
}

const initialState: ICdState & IExtraCdState = {
    ...cd.getState(),
    stoppedByUser: false,
}

export const cdReducer = createReducer<ICdState & IExtraCdState, CdActionsType>(
    initialState,
    {
        [CdActions.stateChange]: (state, payload) => ({
            ...state,
            ...payload,
        }),

        [CdActions.start]: state => ({
            ...state,
            stoppedByUser: false,
        }),

        [CdActions.stop]: state => ({
            ...state,
            stoppedByUser: true,
        }),

        [CdActions.reset]: state => ({
            ...state,
            stoppedByUser: true,
        }),

        [CdActions.restart]: state => ({
            ...state,
            stoppedByUser: false,
        }),
    }
)
