import React from "react"

import styled from "styled-components"

const Svg = styled.svg`
    :hover path {
        stroke: ${props => props.theme.palette.button.fg.hover};
    }

    path {
        stroke-linejoin: round;
        stroke: ${props => props.theme.palette.button.fg.dark};
        stroke-width: 9;
        transition: all 250ms;
    }
`

interface IProps {
    size?: number
}

export const CloseWindowIcon: React.FC<IProps> = ({ size = 25 }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
            <path d="M15 15 L85 85 Z " />
            <path d="M15 85 L85 15 Z " />
        </Svg>
    )
}
