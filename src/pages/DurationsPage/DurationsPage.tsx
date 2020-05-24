import React from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"

import { Box } from "@styled"
import {
    changeDuration,
    changeTotalRounds,
    durationsSelector,
    totalRoundsSelector,
    IChangeDuration,
    setDefaults,
} from "@state"

import { DurationItem } from "./DurationItem"
import { RoundsChangeItem } from "./RoundsChangeItem"

const Button = styled.button`
    color: ${props => props.theme.palette.button.fg.dark};
    transition: all 250ms;
    font-size: 14px;

    :hover {
        color: ${props => props.theme.palette.button.fg.hover};
    }
`

export const DurationsPage: React.FC = () => {
    const dispatch = useDispatch()

    const durations = useSelector(durationsSelector)
    const totalRounds = useSelector(totalRoundsSelector)

    const handleDurationChange = (value: IChangeDuration) =>
        dispatch(changeDuration(value))

    const handleTotalRoundsChange = (value: number) =>
        dispatch(changeTotalRounds(value))

    const handleSetDefaults = () => dispatch(setDefaults())

    return (
        <>
            <Box textAlign="center" mb={3}>
                Timer
            </Box>
            {Object.keys(durations).map(stage => (
                <DurationItem
                    key={stage}
                    stage={stage as keyof typeof durations}
                    defaultValue={durations[stage]}
                    min={1}
                    max={60}
                    onChange={handleDurationChange}
                />
            ))}
            <RoundsChangeItem
                defaultValue={totalRounds}
                min={1}
                max={12}
                onChange={handleTotalRoundsChange}
            />
            <Box display="flex" justifyContent="center" pt={0.5}>
                <Button onClick={handleSetDefaults}>Reset Defaults</Button>
            </Box>
        </>
    )
}
