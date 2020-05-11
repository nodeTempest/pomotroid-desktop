import React, { FunctionComponent } from "react"
import styled from "styled-components"

const Svg = styled.svg`
    stroke: ${props => props.theme.palette.button.fg.dark};
    stroke-width: 7;
`

interface IProps {
    size?: number
}

export const InfoIcon: FunctionComponent<IProps> = ({ size = 25 }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35" />
            <path d="M50 45 L50 70" />
            <path d="M50 30 L50 37" />
        </Svg>
    )
}
