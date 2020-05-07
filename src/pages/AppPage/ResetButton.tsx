import React, { FunctionComponent } from "react"
import styled from "styled-components"

const Button = styled.button`
    background: none;
    outline: none;
    color: ${props => props.theme.palette.button.fg.dark};
    border: none;
    transition: all 250ms;
    font-size: 12px;

    &:hover {
        color: ${props => props.theme.palette.button.fg.hover};
    }
`

export const ResetButton: FunctionComponent<{}> = () => {
    return <Button>Reset</Button>
}
