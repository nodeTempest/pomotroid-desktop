import React, { FunctionComponent } from "react"

import { Box } from "@styled"

interface IProps {
    currentRound: number
    totalRounds: number
}

export const Rounds: FunctionComponent<IProps> = ({
    currentRound,
    totalRounds,
}) => {
    return (
        <Box textAlign="right">
            {currentRound}/{totalRounds}
        </Box>
    )
}
