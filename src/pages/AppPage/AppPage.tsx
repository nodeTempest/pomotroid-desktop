import React from "react"

import { Countdown } from "./Countdown"
import { Rounds } from "./Rounds"
import { PlayButton } from "./PlayButton"
import { ResetButton } from "./ResetButton"
import { NextStageIcon } from "./NextStageIcon"
import { Kek } from "./SoundIcon"

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
                <Box display="flex">
                    <Box mr={3}>
                        <button>
                            <NextStageIcon size={20} />
                        </button>
                    </Box>

                    <Kek size={20} />
                </Box>
            </Box>
        </Box>
    )
}
