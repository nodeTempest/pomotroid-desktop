import React, { FunctionComponent } from "react"
import styled from "styled-components"

import { Box } from "@styled"

const Svg = styled.svg<Required<Pick<IProps, "size">>>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;

    :hover g {
        fill: ${props => props.theme.palette.button.fg.hover};
        stroke: ${props => props.theme.palette.button.fg.hover};
    }

    :hover .arcs path:nth-child(1) {
        stroke: ${props => props.theme.palette.button.fg.hover};
    }

    :hover .arcs path:nth-child(2) {
        fill: ${props => props.theme.palette.button.fg.hover};
    }

    .shapes {
        stroke-linejoin: miter;
        stroke: none;
        stroke: ${props => props.theme.palette.button.fg.dark};
        fill: ${props => props.theme.palette.button.fg.dark};
        transition: all 250ms;
    }

    .arcs path:nth-child(1) {
        fill: none;
        stroke-width: 8;
        stroke-linecap: round;
        stroke: ${props => props.theme.palette.button.fg.dark};
        transition: all 250ms;
    }

    .arcs path:nth-child(2) {
        stroke-width: 0;
        fill: ${props => props.theme.palette.button.fg.dark};
        transition: all 250ms;
    }

    .cross {
        stroke-width: 10;
        stroke-linejoin: round;
        stroke: ${props => props.theme.palette.button.fg.dark};
        transition: all 250ms;
    }

    .cross path:nth-child(2) {
        stroke: ${props => props.theme.palette.bg.dark};
    }
`

interface IProps {
    size?: number
    muted?: boolean
}

export const SoundIcon: FunctionComponent<IProps> = ({
    size = 25,
    muted = false,
}) => {
    return (
        <Svg viewBox="0 0 100 100" size={size}>
            <g className="shapes">
                <rect x="12" y="37" width="25" height="25" />
                <path d="M50 15 50 85 L15 50 Z" />
            </g>
            <g className="arcs" transform="translate(12, 0)">
                <path d="M50 15 A36 36, 0, 0 1, 50 85" />
                <path d="M50 33 A18 18, 0, 0 1, 50 67" />
            </g>
            {muted && (
                <g className="cross">
                    <path d="M15 15 L90 90 Z" />
                    <path transform="translate(14, 0)" d="M0 0 L100 100 Z" />
                </g>
            )}
        </Svg>
    )
}

const Input = styled.input`
    transform: rotate(-90deg);
    width: 110px;
`

export const Kek: FunctionComponent<IProps> = ({
    size = 25,
    muted = false,
}) => {
    return (
        <Box position="relative" display="flex" justifyContent="center">
            <Box
                display="flex"
                justifyContent="center"
                position="absolute"
                bottom="100%"
                height={140}
                width="150%"
            >
                <Input type="range" />
            </Box>
            <SoundIcon size={size} muted={muted} />
        </Box>
    )
}
