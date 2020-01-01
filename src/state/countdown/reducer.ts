import { ICdState } from "../../custom_modules/countdown"
import cd from "./cd"
import { CdActions, CdActionsType } from "./actions"

const initialState: ICdState = cd.getState()

const cdReducer = (state: ICdState = initialState, action: CdActionsType) =>
    action.type === CdActions.stateChange ? action.payload : state

export default cdReducer
