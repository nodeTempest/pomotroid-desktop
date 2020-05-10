import React from "react"

import { Countdown } from "./Countdown"
import { Rounds } from "./Rounds"
import { PlayButton } from "./PlayButton"
import { ResetButton } from "./ResetButton"
import { NextStageIcon } from "./NextStageIcon"
import { Volume } from "./Volume"

import { Box } from "@styled"

export const AppPage = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            p={4}
            height={1}
        >
            <Box mt={6}>
                <Countdown />
            </Box>

            <PlayButton />

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
                <Box display="flex">
                    <Box mr={3}>
                        <button>
                            <NextStageIcon size={20} />
                        </button>
                    </Box>

                    <Volume />
                </Box>
            </Box>
        </Box>
    )
}
