import React, { FunctionComponent } from "react"

import { MenuTabs } from "./MenuTabs"

import { Box } from "@styled"

export const MenuLayout: FunctionComponent<{}> = ({ children }) => {
    return (
        <Box height={1}>
            <Box height={0.93}>{children}</Box>
            <MenuTabs />
        </Box>
    )
}
