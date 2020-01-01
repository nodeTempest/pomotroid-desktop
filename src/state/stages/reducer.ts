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

export const defaultStagesState: IStagesState = {
    rounds: 4,
    currentRound: 0,
    pattern: createPattern(4),
    currentStageIndex: 0,
    durations: {
        work: 25 * MS_IN_MIN,
        sbreak: 5 * MS_IN_MIN,
        lbreak: 15 * MS_IN_MIN,
    },
}

export const initialStagesState: IStagesState = JSON.parse(
    localStorage.getItem("stagesState") || ""
) || { ...defaultStagesState }

initialStagesState.currentRound = 0
initialStagesState.currentStageIndex = 0

const stagesReducer = createReducer<IStagesState, StagesActionTypes>(
    initialStagesState,
    {
        [stagesActions.changeDuration]: (state, payload) => {
            Object.keys(payload).forEach(
                key => (payload[key] = payload[key] * MS_IN_MIN)
            )

            return {
                ...state,
                durations: {
                    ...state.durations,
                    payload,
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
