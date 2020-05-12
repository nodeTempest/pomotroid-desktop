import React, { FunctionComponent } from "react"

import { Box } from "@styled"
import pomotroidLogo from "@assets/logo.svg"

export const AboutPage: FunctionComponent<{}> = () => {
    return (
        <>
            <Box textAlign="center" mb={3}>
                About
            </Box>
            <Box display="flex" justifyContent="center" mb={2}>
                <img alt="logo" src={pomotroidLogo} width="90" height="90" />
            </Box>
            <Box fontSize={25} textAlign="center" color="text.highlight" mb={3}>
                Pomotroid
            </Box>

            <Box textAlign="center" mb={2}>
                Version 0.1.0
            </Box>
            <Box textAlign="center">Made with Love by Nykolai Topchyi</Box>
        </>
    )
}
