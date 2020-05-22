import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MINUTE } from "@constants"

import { createStagesPattern } from "./utils"

export type stagesType = "work" | "sbreak" | "lbreak"

export interface IApp {
    remainingTime: number
    paused: boolean
    stagesPattern: stagesType[]
    currentStageIndex: number
    durations: IDurations
}

export interface IDurations {
    work: number
    sbreak: number
    lbreak: number
}

export interface IChangeDuration {
    stage: stagesType
    minutes: number
}

const initialState: IApp = {
    remainingTime: 1 * MINUTE,
    paused: true,
    stagesPattern: createStagesPattern(4),
    currentStageIndex: 0,
    durations: {
        work: 1 * MINUTE,
        sbreak: 1 * MINUTE,
        lbreak: 1 * MINUTE,
    },
}

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
        resetCurrentStage() {},
        nextStage(state) {
            state.currentStageIndex++
            if (state.currentStageIndex === state.stagesPattern.length) {
                state.currentStageIndex = 0
            }
        },
        changeDuration(state, action: PayloadAction<IChangeDuration>) {
            const { stage, minutes } = action.payload
            state.durations[stage] = minutes * MINUTE
        },
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
} = issuesDisplaySlice.actions

export const { reducer: appReducer } = issuesDisplaySlice
