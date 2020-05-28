import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { Box } from "@styled"
import {
    RootStateType,
    ISettings,
    setAlwaysOnTop,
    setDesktopNotifications,
    setMinimizeToTray,
} from "@state"

import { CheckBox } from "./CheckBox"

export const SettingsPage: React.FC = () => {
    const dispatch = useDispatch()

    const {
        alwaysOnTop,
        desktopNotifications,
        minimizeToTray,
    }: ISettings = useSelector((state: RootStateType) => state.settings)

    const handleAlwaysOnTopChange = (value: boolean) =>
        dispatch(setAlwaysOnTop(value))

    const handleDesktopNotifications = (value: boolean) =>
        dispatch(setDesktopNotifications(value))

    const handleMinimizeToTray = (value: boolean) =>
        dispatch(setMinimizeToTray(value))

    return (
        <>
            <Box textAlign="center" mb={3}>
                Settings
            </Box>
            <CheckBox
                onChange={handleAlwaysOnTopChange}
                checked={alwaysOnTop}
                text="Always On Top"
            />
            <CheckBox
                onChange={handleDesktopNotifications}
                checked={desktopNotifications}
                text="Desktop Notifications"
            />
            <CheckBox
                onChange={handleMinimizeToTray}
                checked={minimizeToTray}
                text="Minimize to Tray"
            />
        </>
    )
}
