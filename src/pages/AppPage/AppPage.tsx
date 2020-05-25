import React from "react"
import { useDispatch, useSelector } from "react-redux"

import {
    RootStateType,
    startCountdown,
    pauseCountdown,
    nextStage,
    currentStageSelector,
    currentStageDurationSelector,
    totalRoundsSelector,
    currentRoundSelector,
    resetCurrentStage,
    setVolume,
} from "@state"

import { Countdown } from "./Countdown"
import { Rounds } from "./Rounds"
import { PlayButton } from "./PlayButton"
import { ResetButton } from "./ResetButton"
import { NextStageIcon } from "./NextStageIcon"
import { Volume } from "./Volume"

import { Box } from "@styled"

export const AppPage = () => {
    const dispatch = useDispatch()

    const { paused, remainingTime } = useSelector(
        (state: RootStateType) => state.app
    )
    const currentStage = useSelector(currentStageSelector)
    const currentStageDuration = useSelector(currentStageDurationSelector)
    const totalRounds = useSelector(totalRoundsSelector)
    const currentRound = useSelector(currentRoundSelector)
    const volume = useSelector((state: RootStateType) => state.settings.volume)

    const handlePause = (paused: boolean) =>
        dispatch(paused ? pauseCountdown() : startCountdown())

    const handleReset = () => dispatch(resetCurrentStage())
    const handleNextStage = () => dispatch(nextStage())
    const handleVolumeChange = (newValue: number) =>
        dispatch(setVolume(newValue))

    return (
        <Box
            bgcolor="bg.dark"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            p={4}
            height={1}
        >
            <Box mt={6}>
                <Countdown
                    paused={paused}
                    stage={currentStage}
                    remainingTime={remainingTime}
                    currentStageDuration={currentStageDuration}
                />
            </Box>

            <PlayButton paused={paused} onChange={handlePause} />

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width={1}
            >
                <Box>
                    <Box mb={2}>
                        <Rounds
                            currentRound={currentRound}
                            totalRounds={totalRounds}
                        />
                    </Box>
                    <Box mb={2}>
                        <ResetButton onClick={handleReset} />
                    </Box>
                </Box>
                <Box display="flex">
                    <Box mr={3}>
                        <button onClick={handleNextStage}>
                            <NextStageIcon size={20} />
                        </button>
                    </Box>

                    <Volume
                        defaultValue={volume}
                        onChange={handleVolumeChange}
                    />
                </Box>
            </Box>
        </Box>
    )
}
