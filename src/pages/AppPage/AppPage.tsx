import React from "react"

import { Countdown } from "./Countdown"
import { Rounds } from "./Rounds"
import { PlayButton } from "./PlayButton"
import { ResetButton } from "./ResetButton"
import { NextStageIcon } from "./NextStageIcon"
import { SoundIcon } from "./SoundIcon"

import { Box } from "@styled"

export const AppPage = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            height={0.9}
        >
            <Box mt={9}>
                <Countdown />
            </Box>

            <Box mt={-2}>
                <PlayButton />
            </Box>

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width={1}
            >
                <Box>
                    <Box mb={2}>
                        <Rounds />
                    </Box>
                    <Box mb={2}>
                        <ResetButton />
                    </Box>
                </Box>
                <div>
                    <Box mr={3} display="inline">
                        <NextStageIcon size={20} />
                    </Box>

                    <SoundIcon size={20} />
                </div>
            </Box>
        </Box>
    )
}
