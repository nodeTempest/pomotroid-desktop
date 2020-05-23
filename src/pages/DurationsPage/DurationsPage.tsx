import React from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"

import { Box } from "@styled"
import { changeDuration, durationsSelector, IChangeDuration } from "@state"

import { StyledInput } from "./StyledInput"
import { DurationItem } from "./DurationItem"

const Button = styled.button`
    color: ${props => props.theme.palette.button.fg.dark};
    transition: all 250ms;
    font-size: 14px;

    :hover {
        color: ${props => props.theme.palette.button.fg.hover};
    }
`

export const DurationsPage: React.FC = () => {
    const durations = useSelector(durationsSelector)

    const dispatch = useDispatch()

    const handleDurationChange = (value: IChangeDuration) =>
        dispatch(changeDuration(value))

    return (
        <>
            <Box textAlign="center" mb={3}>
                Timer
            </Box>
            {Object.keys(durations).map(stage => (
                <DurationItem
                    key={stage}
                    stage={stage as keyof typeof durations}
                    value={durations[stage]}
                    min={1}
                    max={60}
                    onChange={handleDurationChange}
                />
            ))}
            <Box mb={2}>
                <Box color="text.dark" textAlign="center" mb={2} fontSize={13}>
                    Rounds
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box
                        bgcolor="bg.dark"
                        borderRadius={4}
                        px={2}
                        py={0.5}
                        fontSize={13}
                    >
                        4
                    </Box>
                </Box>
                <StyledInput min={1} max={60} value={10} onChange={() => 0} />
            </Box>
            <Box display="flex" justifyContent="center" pt={0.5}>
                <Button>Reset Defaults</Button>
            </Box>
        </>
    )
}
