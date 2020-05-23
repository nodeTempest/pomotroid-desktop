import React from "react"
import styled from "styled-components"

const Svg = styled.svg`
    path {
        stroke: ${props => props.theme.palette.button.fg.dark};
        fill: ${props => props.theme.palette.button.fg.dark};
        transition: all 250ms;
    }

    :hover path {
        stroke: ${props => props.theme.palette.button.fg.hover};
        fill: ${props => props.theme.palette.button.fg.hover};
    }
`

interface IProps {
    size?: number
}

export const NextStageIcon: React.FC<IProps> = ({ size = 25 }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
            <path d="M20 15 L20 85 L55 50 L20 15 Z" />
            <path strokeWidth={6} d="M65 15 L65 85 Z" />
        </Svg>
    )
}
