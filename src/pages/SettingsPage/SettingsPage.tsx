import React, { FunctionComponent } from "react"

import { Box } from "@styled"

import { CheckBox } from "./CheckBox"

export const SettingsPage: FunctionComponent<{}> = () => {
    return (
        <>
            <Box textAlign="center" mb={3}>
                Settings
            </Box>
            <CheckBox checked={false} text="Always On Top" />
            <CheckBox checked={false} text="Auto-start Timer" />
            <CheckBox checked={false} text="Desktop Notifications" />
            <CheckBox checked={false} text="Minimize to Tray" />
        </>
    )
}
