import React, { FunctionComponent } from "react"
import styled from "styled-components"

import { Box } from "@styled"
import { stagesType } from "@state"

const getStageColor = (props: any) =>
    props.stage
        ? props.theme.palette.stages[props.stage]
        : props.theme.palette.button.fg.dark

interface IStyledInput {
    stage?: stagesType
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
                        27 : 00
                    </Box>
                </Box>
                <StyledInput stage="work" value={20} onChange={() => 0} />
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
                <StyledInput stage="sbreak" value={40} onChange={() => 0} />
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
                <StyledInput stage="lbreak" value={75} onChange={() => 0} />
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
