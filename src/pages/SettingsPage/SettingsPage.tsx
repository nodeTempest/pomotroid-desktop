import React, { FunctionComponent } from "react"
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
    onChange?: (checked: boolean) => void
}

const CheckBox: FunctionComponent<ICheckBoxProps> = ({
    checked,
    onChange,
    text,
}) => {
    return (
        <Box
            onClick={() => {
                if (onChange) {
                    onChange(!checked)
                }
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

export const SettingsPage: FunctionComponent<{}> = () => {
    return (
        <div>
            <Box textAlign="center" mb={3}>
                Settings
            </Box>
            <CheckBox checked={false} text="Always On Top" />
            <CheckBox checked={false} text="Auto-start Timer" />
            <CheckBox checked={false} text="Desktop Notifications" />
            <CheckBox checked={false} text="Minimize to Tray" />
        </div>
    )
}
