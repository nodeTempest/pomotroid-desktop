import * as React from "react"
import { FunctionComponent } from "react"

import { NavBar } from "@components/NavBar"
import { Box } from "@styled/Box"

export const AppLayout: FunctionComponent<object> = ({ children }) => {
    return (
        <Box height={480} width={360} border={3}>
            <NavBar />
            {children}
        </Box>
    )
}
