import React, { FunctionComponent } from "react"

import { MenuTabs } from "./MenuTabs"

import { Box } from "@styled"

export const MenuLayout: FunctionComponent<{}> = ({ children }) => {
    return (
        <Box bgcolor="bg.light" height={1}>
            <Box px={4} py={2} height={0.91}>
                {children}
            </Box>
            <MenuTabs />
        </Box>
    )
}
