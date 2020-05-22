import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"

import { Box } from "@styled"
import { stagesType, changeDuration, durationsSelector } from "@state"

const getStageColor = (props: any) =>
    props.stage
        ? props.theme.palette.stages[props.stage]
        : props.theme.palette.button.fg.dark

interface IStyledInput {
    stage?: stagesType
    min: number
    max: number
    value: number
}

const StyledInput = styled.input.attrs(() => ({
    type: "range",
}))<IStyledInput>`
    -webkit-appearance: none;
    height: 3px;
    width: 100%;
    background: ${props => {
        const fillColor = getStageColor(props)
        const emptyColor = props.theme.palette.bg.dark
        const { min, max, value } = props
        const progress = ((value - min) / (max - min)) * 100

        return `linear-gradient(to right, ${fillColor} 0%, ${fillColor} ${progress}%, ${emptyColor} ${progress}%, ${emptyColor} 100%)`
    }};

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: ${props => getStageColor(props)};
    }
`

const Button = styled.button`
    color: ${props => props.theme.palette.button.fg.dark};
    transition: all 250ms;
    font-size: 14px;

    :hover {
        color: ${props => props.theme.palette.button.fg.hover};
    }
`

export const DurationsPage: FunctionComponent<{}> = () => {
    const dispatch = useDispatch()

    const durations = useSelector(durationsSelector)

    const handleWorkDurationChange: React.ChangeEventHandler<HTMLInputElement> = e =>
        dispatch(changeDuration({ stage: "work", minutes: +e.target.value }))

    return (
        <>
            <Box textAlign="center" mb={3}>
                Timer
            </Box>
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
                        {durations.work} : 00
                    </Box>
                </Box>
                <StyledInput
                    min={1}
                    max={60}
                    stage="work"
                    value={durations.work}
                    onChange={handleWorkDurationChange}
                />
            </Box>
            <Box mb={2}>
                <Box color="text.dark" textAlign="center" mb={2} fontSize={13}>
                    Short Break
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box
                        bgcolor="bg.dark"
                        borderRadius={4}
                        px={2}
                        py={0.5}
                        fontSize={13}
                    >
                        05 : 00
                    </Box>
                </Box>
                <StyledInput
                    min={1}
                    max={60}
                    stage="sbreak"
                    value={40}
                    onChange={() => 0}
                />
            </Box>
            <Box mb={2}>
                <Box color="text.dark" textAlign="center" mb={2} fontSize={13}>
                    Long Break
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box
                        bgcolor="bg.dark"
                        borderRadius={4}
                        px={2}
                        py={0.5}
                        fontSize={13}
                    >
                        42 : 00
                    </Box>
                </Box>
                <StyledInput
                    min={1}
                    max={60}
                    stage="lbreak"
                    value={75}
                    onChange={() => 0}
                />
            </Box>
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
