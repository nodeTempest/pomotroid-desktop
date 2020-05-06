import React, { FunctionComponent } from "react"

import styled from "styled-components"

const Svg = styled.svg<IProps>`
    & {
        width: ${props => props.size}px;
        height: ${props => props.size}px;
    }

    &:hover path {
        stroke: ${props => props.theme.palette.button.fg.hover};
    }

    path {
        stroke-linejoin: round;
        stroke: ${props => props.theme.palette.button.fg.dark};
        stroke-width: 8;
        transition: all 250ms;
    }
`

interface IProps {
    size?: number
}

export const MinimizeWindowIcon: FunctionComponent<IProps> = ({
    size = 25,
}) => {
    return (
        <Svg viewBox="0 0 100 100" size={size as number}>
            <path d="M15 50 L85 50 Z " />
        </Svg>
    )
}
