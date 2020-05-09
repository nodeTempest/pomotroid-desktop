import React, { FunctionComponent } from "react"

import styled from "styled-components"

interface IStyledProps {
    size: number
}

const Svg = styled.svg<IStyledProps>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;

    :hover path {
        stroke: ${props => props.theme.palette.button.fg.hover};
    }

    path {
        stroke: ${props => props.theme.palette.button.fg.dark};
        stroke-width: 8;
        transition: all 250ms;
    }
`

interface IProps {
    active: boolean
    size?: number
}

export const OpenMenuIcon: FunctionComponent<IProps> = ({
    active,
    size = 25,
}) => {
    const activeTopD = "M15 35 L85 35 Z"
    const activeBotD = "M15 65 L50 65 Z"

    const unactiveTopD = "M35 50 L70 15 Z"
    const unactiveBotD = "M35 50 L70 85 Z"
    return (
        <Svg viewBox="0 0 100 100" size={size}>
            <path d={active ? activeTopD : unactiveTopD} />
            <path d={active ? activeBotD : unactiveBotD} />
        </Svg>
    )
}
