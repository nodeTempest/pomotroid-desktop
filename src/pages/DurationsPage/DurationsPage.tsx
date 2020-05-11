import React, { FunctionComponent } from "react"
import styled from "styled-components"

import { Box } from "@styled"

import { stageTypes } from "@state/stages/reducer"

const getStageColor = (props: any) =>
    props.stageType
        ? props.theme.palette.stages[props.stageType]
        : props.theme.palette.button.fg.dark

interface IStyledInput {
    stageType?: stageTypes
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

        return `linear-gradient(to right, ${fillColor} 0%, ${fillColor} ${props.value}%, ${emptyColor} ${props.value}%, ${emptyColor} 100%)`
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
    return (
        <>
            <Box textAlign="center" mb={2}>
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
                        27 : 00
                    </Box>
                </Box>
                <StyledInput stageType="work" value={20} onChange={() => 0} />
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
                <StyledInput stageType="sbreak" value={40} onChange={() => 0} />
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
                <StyledInput stageType="lbreak" value={75} onChange={() => 0} />
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
                <StyledInput value={10} onChange={() => 0} />
            </Box>
            <Box display="flex" justifyContent="center" pt={0.5}>
                <Button>Reset Defaults</Button>
            </Box>
        </>
    )
}
