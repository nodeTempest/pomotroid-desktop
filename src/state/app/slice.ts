import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit"
import { MINUTE } from "@constants"
import { REHYDRATE } from "redux-persist"

import {
    createStagesPattern,
    getCurrentStage,
    getCurrentStageDuration,
    getCurrentRound,
} from "./utils"

export type StagesType = "work" | "sbreak" | "lbreak"

export interface IApp {
    remainingTime: number
    paused: boolean
    stagesPattern: StagesType[]
    currentStageIndex: number
    durations: DurationsType
}

export type DurationsType = Record<StagesType, number>

export interface IChangeDuration {
    stage: StagesType
    minutes: number
}

const initialState: IApp = {
    remainingTime: 0.05 * MINUTE,
    paused: true,
    stagesPattern: createStagesPattern(4),
    currentStageIndex: 0,
    durations: {
        work: 0.05 * MINUTE,
        sbreak: 5 * MINUTE,
        lbreak: 15 * MINUTE,
    },
}

const bootstrapReducerAction = createAction(REHYDRATE)

const issuesDisplaySlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        startTimer(_, __: PayloadAction<number>) {},

        clearTimer() {},

        timerIsOver() {},

        startCountdown(state) {
            state.paused = false
        },

        pauseCountdown(state) {
            state.paused = true
        },

        updateRemainingTime(state, action: PayloadAction<number>) {
            state.remainingTime = action.payload
        },

        resetCurrentStage(state) {
            state.remainingTime = getCurrentStageDuration(state)
        },

        nextStage(state) {
            state.currentStageIndex++
            if (state.currentStageIndex === state.stagesPattern.length) {
                state.currentStageIndex = 0
            }
        },

        changeDuration(state, action: PayloadAction<IChangeDuration>) {
            const { stage, minutes } = action.payload
            state.durations[stage] = minutes * MINUTE

            if (getCurrentStage(state) === stage) {
                state.remainingTime = getCurrentStageDuration(state)
            }
        },

        changeTotalRounds(state, action: PayloadAction<number>) {
            const roundsNumber = action.payload
            state.stagesPattern = createStagesPattern(roundsNumber)

            if (roundsNumber < getCurrentRound(state)) {
                state.currentStageIndex = 0
                state.remainingTime = getCurrentStageDuration(state)
            }
        },

        setDefaults(state) {
            Object.keys(state).forEach(key => (state[key] = initialState[key]))
        },
    },
    extraReducers: builder => {
        builder.addCase(bootstrapReducerAction, state => {
            state.remainingTime = state.durations.work
        })
    },
})

export const {
    startTimer,
    clearTimer,
    timerIsOver,
    startCountdown,
    pauseCountdown,
    updateRemainingTime,
    nextStage,
    resetCurrentStage,
    changeDuration,
    changeTotalRounds,
    setDefaults,
} = issuesDisplaySlice.actions

export const { reducer: appReducer } = issuesDisplaySlice
