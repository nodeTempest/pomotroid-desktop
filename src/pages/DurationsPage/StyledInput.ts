import styled from "styled-components"

import { StagesType } from "@state"

const getStageColor = (props: any) =>
    props.stage
        ? props.theme.palette.stages[props.stage]
        : props.theme.palette.button.fg.dark

interface IStyledInput {
    stage?: StagesType
    min: number
    max: number
    value: number
}

export const StyledInput = styled.input.attrs(() => ({
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
