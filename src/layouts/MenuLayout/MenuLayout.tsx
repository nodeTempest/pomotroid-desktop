import React, { FunctionComponent } from "react"

import { Box } from "@styled"
import { MenuTabs } from "@layouts"

import { FadeTransition } from "./FadeTransition"

export const MenuLayout: FunctionComponent<{}> = ({ children }) => {
    return (
        <Box bgcolor="bg.light" height={1}>
            <Box px={4} py={2} height={0.91}>
                <FadeTransition>{children}</FadeTransition>
            </Box>
            <MenuTabs />
        </Box>
    )
}
