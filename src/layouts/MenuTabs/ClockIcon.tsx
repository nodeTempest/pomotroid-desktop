import React, { FunctionComponent } from "react"
import styled from "styled-components"

const Svg = styled.svg`
    circle {
        stroke: ${props => props.theme.palette.button.fg.dark};
        stroke-width: 7;
        fill: none;
    }

    path {
        stroke-linecap: round;
        stroke: ${props => props.theme.palette.button.fg.dark};
        stroke-width: 6;
    }
`

interface IProps {
    size?: number
}

export const ClockIcon: FunctionComponent<IProps> = ({ size = 25 }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35" />
            <path d="M50 50 l0 -20 Z" />
            <path d="M50 50 l17 10 Z" />
        </Svg>
    )
}
