import { createSelector } from "reselect"
import { IRootState } from "../root-reducer"
import { MS_IN_MIN } from "../../constants"
import { createReducer } from "../common"
import { stagesActions, StagesActionTypes } from "./actions"

export type stageTypes = "work" | "sbreak" | "lbreak"

export interface IDurations {
    work: number
    sbreak: number
    lbreak: number
}

export interface IStagesState {
    rounds: number
    currentRound: number
    pattern: stageTypes[]
    currentStageIndex: number
    durations: IDurations
}

// helper
const createPattern = (rounds: number): stageTypes[] => {
    const acc = [] as stageTypes[]
    while (rounds--) {
        acc.push("work", "sbreak")
    }
    return [...acc, "lbreak"]
}

export const formatDurationsToMS = (
    durations: Partial<IDurations>
): Partial<IDurations> =>
    Object.keys(durations).reduce(
        (acc, key) => ((acc[key] = acc[key] * MS_IN_MIN), acc),
        { ...durations }
    )

export const formatDurationsToMINS = (
    durations: Partial<IDurations>
): Partial<IDurations> =>
    Object.keys(durations).reduce(
        (acc, key) => ((acc[key] = acc[key] / MS_IN_MIN), acc),
        { ...durations }
    )

export const defaultStagesState: IStagesState = {
    rounds: 4,
    currentRound: 0,
    pattern: createPattern(4),
    currentStageIndex: 0,
    durations: formatDurationsToMS({
        work: 25,
        sbreak: 5,
        lbreak: 15,
    }) as IDurations,
}

export const initialStagesState: IStagesState = { ...defaultStagesState }

initialStagesState.currentRound = 0
initialStagesState.currentStageIndex = 0

const stagesReducer = createReducer<IStagesState, StagesActionTypes>(
    initialStagesState,
    {
        [stagesActions.changeDuration]: (state, payload) => {
            return {
                ...state,
                durations: {
                    ...state.durations,
                    ...formatDurationsToMS(payload),
                },
            }
        },

        [stagesActions.changeRounds]: (state, payload) => ({
            ...state,
            rounds: payload,
            pattern: createPattern(payload),
        }),

        [stagesActions.nextStage]: state => {
            return {
                ...state,
                currentStageIndex:
                    state.currentStageIndex < state.pattern.length - 1
                        ? state.currentStageIndex + 1
                        : 0,
            }
        },

        [stagesActions.setDefaults]: () => ({
            ...defaultStagesState,
        }),
    }
)

export default stagesReducer

// Selectors
export const currentStageSelector = createSelector<
    IRootState,
    stageTypes[],
    number,
    stageTypes
>(
    state => state.stages.pattern,
    state => state.stages.currentStageIndex,
    (pattern, index) => pattern[index]
)

export const currentStageDurationsSelector = createSelector<
    IRootState,
    stageTypes,
    IDurations,
    IDurations[stageTypes]
>(
    currentStageSelector,
    state => state.stages.durations,
    (stage, durations) => durations[stage]
)

export const durationsSelector = createSelector<
    IRootState,
    IDurations,
    IDurations
>(
    state => state.stages.durations,
    durations => formatDurationsToMINS(durations) as IDurations
)
