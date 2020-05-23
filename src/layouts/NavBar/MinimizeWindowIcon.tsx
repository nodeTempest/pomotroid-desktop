import React from "react"

import styled from "styled-components"

const Svg = styled.svg`
    :hover path {
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

export const MinimizeWindowIcon: React.FC<IProps> = ({ size = 25 }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
            <path d="M15 50 L85 50 Z " />
        </Svg>
    )
}
