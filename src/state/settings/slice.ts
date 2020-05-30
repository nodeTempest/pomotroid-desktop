import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ISettings {
    volume: number
    alwaysOnTop: boolean
    desktopNotifications: boolean
    minimizeToTray: boolean
}

const initialState: ISettings = {
    volume: 20,
    alwaysOnTop: false,
    desktopNotifications: true,
    minimizeToTray: true,
}

const issuesDisplaySlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setVolume(state, action: PayloadAction<number>) {
            state.volume = action.payload
        },

        setAlwaysOnTop(state, action: PayloadAction<boolean>) {
            state.alwaysOnTop = action.payload
        },

        setDesktopNotifications(state, action: PayloadAction<boolean>) {
            state.desktopNotifications = action.payload
        },

        setMinimizeToTray(state, action: PayloadAction<boolean>) {
            state.minimizeToTray = action.payload
        },
    },
})

export const {
    setVolume,
    setAlwaysOnTop,
    setDesktopNotifications,
    setMinimizeToTray,
} = issuesDisplaySlice.actions

export const { reducer: settingsReducer } = issuesDisplaySlice
