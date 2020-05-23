import React from "react"
import styled from "styled-components"

const Button = styled.button`
    color: ${props => props.theme.palette.button.fg.dark};
    transition: all 250ms;
    font-size: 14px;

    :hover {
        color: ${props => props.theme.palette.button.fg.hover};
    }
`

interface IProps {
    onClick?: (e: React.MouseEvent) => void
}

export const ResetButton: React.FC<IProps> = ({ onClick = () => {} }) => {
    return <Button onClick={onClick}>Reset</Button>
}
