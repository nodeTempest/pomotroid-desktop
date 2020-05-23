import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ISettings {
    volume: number
}

const initialState: ISettings = {
    volume: 20,
}

const defaultState: ISettings = {
    volume: 20,
}

const issuesDisplaySlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setVolume(state, action: PayloadAction<number>) {
            state.volume = action.payload
        },
    },
})

export const { setVolume } = issuesDisplaySlice.actions

export const { reducer: settingsReducer } = issuesDisplaySlice
