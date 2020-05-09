import React, { FunctionComponent } from "react"
import styled from "styled-components"

import { theme } from "@styled"

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

        path {
            fill: ${props => props.theme.palette.button.fg.hover};
        }
    }

    path {
        transition: all 250ms;
    }
`

export const PlayButton: FunctionComponent<{}> = () => {
    return (
        <Button>
            <svg viewBox="0 0 100 100" width="20" height="20">
                <path
                    d="M20 15 L20 85 L55 50 L20 15 Z"
                    transform="translate(20, 0)"
                    fill={theme.palette.button.fg.light}
                />
            </svg>
        </Button>
    )
}
