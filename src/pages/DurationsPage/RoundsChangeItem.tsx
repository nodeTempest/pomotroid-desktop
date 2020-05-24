import React, { useState, useEffect } from "react"
import { useDebounce } from "react-use"

import { Box } from "@styled"

import { StyledInput } from "./StyledInput"

interface IProps {
    defaultValue: number
    min: number
    max: number
    onChange: (value: number) => void
}

export const RoundsChangeItem: React.FC<IProps> = ({
    defaultValue,
    min,
    max,
    onChange,
}) => {
    const [value, setValue] = useState(defaultValue)

    const [, cancel] = useDebounce(
        () => {
            onChange(value)
        },
        500,
        [value]
    )

    useEffect(() => {
        cancel()
    }, [])

    useEffect(() => {
        setValue(defaultValue)
    }, [defaultValue, setValue])

    return (
        <Box mb={2}>
            <Box color="text.dark" textAlign="center" mb={2} fontSize={13}>
                Rounds
            </Box>
            <Box display="flex" justifyContent="center">
                <Box
                    bgcolor="bg.dark"
                    borderRadius={4}
                    px={2}
                    py={0.5}
                    fontSize={13}
                >
                    {value}
                </Box>
            </Box>
            <StyledInput
                min={min}
                max={max}
                value={value}
                onChange={e => setValue(+e.target.value)}
            />
        </Box>
    )
}
