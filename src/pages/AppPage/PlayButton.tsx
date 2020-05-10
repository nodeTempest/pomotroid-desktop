import React, { FunctionComponent, useState } from "react"
import styled from "styled-components"

import { Box } from "@styled"

const Button = styled.button`
    border-radius: 50%;
    border: 1.5px solid ${props => props.theme.palette.button.fg.dark};
    background: none;
    outline: none;
    transition: all 250ms;
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background: ${props => props.theme.palette.button.bg.dark};
    }

    path {
        transition: all 250ms;
    }
`

const ButtonActive = styled(Button)`
    :hover path {
        fill: ${props => props.theme.palette.button.fg.hover};
    }

    path {
        fill: ${props => props.theme.palette.button.fg.light};
    }
`

const ButtonPaused = styled(Button)`
    :hover path {
        stroke: ${props => props.theme.palette.button.fg.hover};
    }

    path {
        stroke: ${props => props.theme.palette.button.fg.light};
        stroke-linejoin: round;
        stroke-width: 12;
    }
`

export const PlayButton: FunctionComponent<{}> = () => {
    const [paused, setPaused] = useState(false)
    return (
        <div>
            <ButtonActive>
                <svg viewBox="0 0 100 100" width="20" height="20">
                    <path
                        d="M20 15 L20 85 L55 50 L20 15 Z"
                        transform="translate(20, 0)"
                    />
                </svg>
            </ButtonActive>
            <ButtonPaused>
                <svg viewBox="0 0 100 100" width="20" height="20">
                    <path d="M35 20 L35 80 Z" />
                    <path d="M65 20 L65 80 Z" />
                </svg>
            </ButtonPaused>
        </div>
    )
}
