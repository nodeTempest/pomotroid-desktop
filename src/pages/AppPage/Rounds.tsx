import React from "react"

import { Box } from "@styled"

interface IProps {
    currentRound: number
    totalRounds: number
}

export const Rounds: React.FC<IProps> = ({ currentRound, totalRounds }) => {
    return (
        <Box textAlign="right">
            {currentRound}/{totalRounds}
        </Box>
    )
}
