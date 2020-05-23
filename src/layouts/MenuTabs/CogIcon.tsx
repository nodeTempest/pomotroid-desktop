import React from "react"
import styled from "styled-components"

const Svg = styled.svg`
    circle {
        stroke: ${props => props.theme.palette.button.fg.dark};
        stroke-width: 15;
        fill: none;
    }

    polygon {
        fill: ${props => props.theme.palette.button.fg.dark};
    }
`

interface IProps {
    size?: number
}

export const CogIcon: React.FC<IProps> = ({ size = 25 }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="20" />
            {new Array(6).fill(0).map((_, i) => (
                <polygon
                    key={i}
                    points="-10,0 10,0 8,-20 -8,-20"
                    transform={`translate(50, 50) rotate(${i *
                        60}) translate(0, -16)`}
                />
            ))}
        </Svg>
    )
}
