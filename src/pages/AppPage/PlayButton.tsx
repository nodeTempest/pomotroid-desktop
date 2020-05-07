import React, { FunctionComponent } from "react"
import styled from "styled-components"

import { theme } from "@styled"

const Button = styled.button`
    border-radius: 50%;
    border: 1.5px solid ${props => props.theme.palette.button.fg.dark};
    background: none;
    outline: none;
    transition: all 250ms;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: ${props => props.theme.palette.button.bg.dark};
    }

    path {
        transition: all 250ms;
    }

    &:hover path {
        fill: ${props => props.theme.palette.button.fg.hover};
    }
`

export const PlayButton: FunctionComponent<{}> = () => {
    return (
        <Button>
            <svg viewBox="0 0 100 100" width="22" height="22">
                <path
                    d="M20 15 L20 85 L55 50 L20 15 Z"
                    transform="translate(20, 0)"
                    fill={theme.palette.button.fg.light}
                />
            </svg>
        </Button>
    )
}
