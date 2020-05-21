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

const initialState: IApp = {
    remainingTime: 25 * MINUTE,
    paused: true,
    stagesPattern: createStagesPattern(4),
    currentStageIndex: 0,
    durations: {
        work: 25 * MINUTE,
        sbreak: 5 * MINUTE,
        lbreak: 15 * MINUTE,
    },
}

const issuesDisplaySlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        startCountdown(state) {
            state.paused = false
        },
        pauseCountdown(state) {
            state.paused = true
        },
        updateCountdown(state, action: PayloadAction<number>) {
            state.remainingTime = action.payload
        },
        countOver(state) {
            state.paused = true
            state.remainingTime = initialState.remainingTime
        },
    },
})

export const {
    startCountdown,
    pauseCountdown,
    updateCountdown,
    countOver,
} = issuesDisplaySlice.actions

export const { reducer: appReducer } = issuesDisplaySlice
