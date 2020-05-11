import React, { FunctionComponent } from "react"

import { Box } from "@styled"

export const InfoPage: FunctionComponent<{}> = () => {
    return (
        <>
            <Box textAlign="center" mb={3}>
                About
            </Box>
            <Box display="flex" justifyContent="center" mb={2}>
                <svg viewBox="0 0 100 100" width="90" height="90">
                    <circle cx="50" cy="50" r="40" fill="#2f384b" />
                    <circle
                        cx="50"
                        cy="50"
                        r="24"
                        fill="none"
                        stroke="#fe4d4c"
                        strokeWidth="13"
                    />
                </svg>
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
