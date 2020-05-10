import * as React from "react"
import { FunctionComponent } from "react"

import { NavBar } from "@layouts/NavBar"
import { Box } from "@styled/Box"

export const AppLayout: FunctionComponent<{}> = ({ children }) => {
    return (
        <Box height={480} width={360} ml={10} mt={10} bgcolor="bg.dark">
            <NavBar />
            <Box height={0.9}>{children}</Box>
        </Box>
    )
}
