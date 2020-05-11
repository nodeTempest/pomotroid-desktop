import React, { FunctionComponent } from "react"
import styled from "styled-components"

const Button = styled.button`
    color: ${props => props.theme.palette.button.fg.dark};
    transition: all 250ms;
    font-size: 14px;

    :hover {
        color: ${props => props.theme.palette.button.fg.hover};
    }
`

export const ResetButton: FunctionComponent<{}> = () => {
    return <Button>Reset</Button>
}
