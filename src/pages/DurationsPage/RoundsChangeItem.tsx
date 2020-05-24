import React, { useState } from "react"
import { useDebounce } from "react-use"

import { Box } from "@styled"

import { StyledInput } from "./StyledInput"

interface IProps {
    defaulValue: number
    min: number
    max: number
    onChange: (value: number) => void
}

export const RoundsChangeItem: React.FC<IProps> = ({
    defaulValue,
    min,
    max,
    onChange,
}) => {
    const [value, setValue] = useState(defaulValue)
    const [, cancel] = useDebounce(
        () => {
            onChange(value)
        },
        500,
        [value]
    )
    React.useEffect(() => {
        cancel()
    }, [])

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
