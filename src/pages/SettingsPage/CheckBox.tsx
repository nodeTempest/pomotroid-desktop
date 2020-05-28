import React from "react"
import styled from "styled-components"

import { Box } from "@styled"

interface ICheckCircle {
    checked: boolean
}

const CheckCircle = styled.div<ICheckCircle>`
    border-radius: 50%;
    transition: all 250ms;
    width: 18px;
    height: 18px;

    background-color: ${props =>
        props.checked && props.theme.palette.button.fg.hover};

    border: 2px solid
        ${props =>
            props.checked
                ? props.theme.palette.button.fg.hover
                : props.theme.palette.button.fg.dark};

    *:hover > & {
        border: 2px solid ${props => props.theme.palette.button.fg.hover};
    }
`

interface ICheckBoxProps {
    checked: boolean
    text: string
    onChange: (checked: boolean) => void
}

export const CheckBox: React.FC<ICheckBoxProps> = ({
    checked,
    onChange,
    text,
}) => {
    return (
        <Box
            onClick={() => {
                onChange(!checked)
            }}
            position="relative"
            bgcolor="bg.dark"
            borderRadius={4}
            display="flex"
            justifyContent="space-between"
            p={3}
            alignItems="center"
            mb={3}
        >
            <Box color="text.dark" fontSize={14}>
                {text}
            </Box>
            <CheckCircle checked={checked} />
        </Box>
    )
}
