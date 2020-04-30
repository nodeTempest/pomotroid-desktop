import React, { FunctionComponent } from "react"

import styled from "styled-components"

const Svg = styled.svg`
    path {
        stroke-linejoin: miter;
        stroke: ${props => props.theme.palette.button.fg.dark};
        stroke-width: 8;
        transition: all 250ms;
    }

    &:hover path {
        stroke: ${props => props.theme.palette.button.fg.hover};
    }
`

interface IProps {
    active: boolean
    size: number
}

export const OpenMenuIcon: FunctionComponent<IProps> = ({ active, size }) => {
    const activeTopD = "M15 35 L85 35 Z"
    const activeBotD = "M15 65 L50 65 Z"

    const unactiveTopD = "M35 50 L70 15 Z"
    const unactiveBotD = "M35 50 L70 85 Z"
    return (
        <Svg viewBox="0 0 100 100" width={size} height={size}>
            <path d={active ? activeTopD : unactiveTopD} />
            <path d={active ? activeBotD : unactiveBotD} />
        </Svg>
    )
}
