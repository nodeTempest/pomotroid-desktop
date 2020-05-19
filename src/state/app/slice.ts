import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IApp {
    remainingTime: number
    paused: boolean
}

const initialState: IApp = {
    remainingTime: 10 * 1000,
    paused: true,
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
