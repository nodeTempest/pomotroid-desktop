import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { Box } from "@styled"
import { changeDuration, durationsSelector, stagesType } from "@state"

import { StyledInput } from "./StyledInput"

interface IProps {
    stage: stagesType
}

export const DurationItem: React.FC<IProps> = ({ stage }) => {
    const dispatch = useDispatch()

    const durations = useSelector(durationsSelector)

    const handleDurationChange: React.ChangeEventHandler<HTMLInputElement> = e =>
        dispatch(changeDuration({ stage, minutes: +e.target.value }))

    return (
        <Box mb={2}>
            <Box color="text.dark" textAlign="center" mb={2} fontSize={13}>
                Work
            </Box>
            <Box display="flex" justifyContent="center">
                <Box
                    bgcolor="bg.dark"
                    borderRadius={4}
                    px={2}
                    py={0.5}
                    fontSize={13}
                >
                    {durations[stage]} : 00
                </Box>
            </Box>
            <StyledInput
                min={1}
                max={60}
                stage={stage}
                value={durations[stage]}
                onChange={handleDurationChange}
            />
        </Box>
    )
}
