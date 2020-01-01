import { IDurations } from "./reducer"

export enum stagesActions {
    changeDuration = "STAGES / CHANGE_DURATION",
    changeRounds = "STAGES / CHANGE_ROUNDS",
    nextStage = "STAGES / NTEXT",
    setDefaults = "STAGES / SET_DEFAULTS",
}

interface IStagesChangeDurationAction {
    type: typeof stagesActions.changeDuration
    payload: IDurations
}

interface IStagesChangeRoundsAction {
    type: typeof stagesActions.changeRounds
    payload: number
}

interface IStagesNextStageAction {
    type: typeof stagesActions.nextStage
}

interface IStagesSetDefaultsAction {
    type: typeof stagesActions.setDefaults
}

export type StagesActionTypes =
    | IStagesChangeDurationAction
    | IStagesChangeRoundsAction
    | IStagesNextStageAction
    | IStagesSetDefaultsAction

export const changeStagesDuration = (
    durations: IDurations
): IStagesChangeDurationAction => ({
    type: stagesActions.changeDuration,
    payload: durations,
})

export const changeSatgesRounds = (
    rounds: number
): IStagesChangeRoundsAction => ({
    type: stagesActions.changeRounds,
    payload: rounds,
})

export const nextStage = (): IStagesNextStageAction => ({
    type: stagesActions.nextStage,
})

export const stagesSetDefaults = (): IStagesSetDefaultsAction => ({
    type: stagesActions.setDefaults,
})
