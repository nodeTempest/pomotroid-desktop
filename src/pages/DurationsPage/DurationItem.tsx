import React, { useState, useEffect } from "react"
import moment from "moment"
import { useDebounce } from "react-use"

import { Box } from "@styled"
import { StagesType, IChangeDuration } from "@state"

import { StyledInput } from "./StyledInput"

interface IProps {
    stage: StagesType
    defaultValue: number
    min: number
    max: number
    onChange: (value: IChangeDuration) => void
}

export const DurationItem: React.FC<IProps> = ({
    stage,
    defaultValue,
    min,
    max,
    onChange,
}) => {
    const [value, setValue] = useState(defaultValue)

    const [, cancel] = useDebounce(
        () => {
            onChange({ stage, minutes: value })
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
                Work
            </Box>
            <Box display="flex" justifyContent="center">
                <Box
                    bgcolor="bg.dark"
                    borderRadius={4}
                    px={2}
                    py={0.5}
                    fontSize={13}
                >
                    {moment({ minutes: value }).format("mm : ss")}
                </Box>
            </Box>
            <StyledInput
                min={min}
                max={max}
                stage={stage}
                value={value}
                onChange={e => setValue(+e.target.value)}
            />
        </Box>
    )
}
