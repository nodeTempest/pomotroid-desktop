import React from "react"

import { Box } from "@styled"
import { stagesType, IChangeDuration } from "@state"

import { StyledInput } from "./StyledInput"

interface IProps {
    stage: stagesType
    value: number
    min: number
    max: number
    onChange: (value: IChangeDuration) => void
}

export const DurationItem: React.FC<IProps> = ({
    stage,
    value,
    min,
    max,
    onChange,
}) => {
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
                    {value} : 00
                </Box>
            </Box>
            <StyledInput
                min={min}
                max={max}
                stage={stage}
                value={value}
                onChange={e => onChange({ stage, minutes: +e.target.value })}
            />
        </Box>
    )
}
