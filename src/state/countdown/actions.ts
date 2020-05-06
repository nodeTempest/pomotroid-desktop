import { ICdState, IOptions as ICdOptions } from "@modules"

export enum CdActions {
    stateChange = "CD / STATE_CHANGE",
    start = "CD / START",
    stop = "CD / STOP",
    restart = "CD / RESTART",
    reset = "CD / RESET",
}

interface ICdUpdateAction {
    type: typeof CdActions.stateChange
    payload: ICdState
}

interface ICdStartAction {
    type: typeof CdActions.start
}

interface ICdStopAction {
    type: typeof CdActions.stop
}

interface ICdRestartAction {
    type: typeof CdActions.restart
    payload: ICdOptions
}

interface ICdResetAction {
    type: typeof CdActions.reset
    payload: ICdOptions
}

export type CdActionsType =
    | ICdUpdateAction
    | ICdStartAction
    | ICdStopAction
    | ICdRestartAction
    | ICdResetAction

export const updateCd = (newstate: ICdState): ICdUpdateAction => ({
    type: CdActions.stateChange,
    payload: newstate,
})

export const startCd = (): ICdStartAction => ({
    type: CdActions.start,
})

export const stopCd = (): ICdStopAction => ({
    type: CdActions.stop,
})

export const restartCd = (options: ICdOptions = {}): ICdRestartAction => ({
    type: CdActions.restart,
    payload: options,
})

export const resetCd = (options: ICdOptions = {}): ICdResetAction => ({
    type: CdActions.reset,
    payload: options,
})
