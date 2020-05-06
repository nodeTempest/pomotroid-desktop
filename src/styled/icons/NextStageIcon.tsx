import React, { FunctionComponent } from "react"

import styled from "styled-components"

const Svg = styled.svg<IProps>`
    & {
        width: ${props => props.size}px;
        height: ${props => props.size}px;
    }

    &:hover path {
        stroke: ${props => props.theme.palette.button.fg.hover};
        fill: ${props => props.theme.palette.button.fg.hover};
    }

    path {
        stroke: ${props => props.theme.palette.button.fg.dark};
        fill: ${props => props.theme.palette.button.fg.dark};
        transition: all 250ms;
    }
`

interface IProps {
    size?: number
}

export const NextStageIcon: FunctionComponent<IProps> = ({ size = 25 }) => {
    return (
        <Svg viewBox="0 0 100 100" size={size as number}>
            <path d="M20 15 L20 85 L55 50 L20 15 Z" />
            <path strokeWidth={6} d="M65 15 L65 85 Z" />
        </Svg>
    )
}
