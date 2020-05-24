import React, { useState, useRef } from "react"
import styled from "styled-components"
import { useThrottleFn } from "react-use"

import { Box } from "@styled"
import { useOnClickOutside } from "@utils"

import { SoundIcon } from "./SoundIcon"

const Input = styled.input`
    transform: rotate(-90deg);
    width: 110px;
    background: ${props => props.theme.palette.button.fg.dark};
    -webkit-appearance: none;
    height: 3px;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 18px;
        height: 18px;
        background: ${props => props.theme.palette.button.fg.dark};
        border-radius: 50%;
        transition: all 250ms;

        :hover {
            background: ${props => props.theme.palette.button.fg.hover};
        }
    }
`

interface IProps {
    defaultValue: number
    onChange: (newValue: number) => void
}

export const Volume: React.FC<IProps> = ({ defaultValue, onChange }) => {
    const [value, setValue] = useState(defaultValue)
    useThrottleFn(value => onChange(value), 100, [value])

    const [showVolumeBar, setShowVolumeBar] = useState(false)

    const timerId = useRef<number>(null) as React.MutableRefObject<number>
    const containerRef = useRef<HTMLDivElement>(null)

    useOnClickOutside(containerRef, () => setShowVolumeBar(false))

    const [mouseDownValue, setMouseDownValue] = useState(value)
    const [mouseUpValue, setMouseUpValue] = useState(value)

    return (
        <Box
            ref={containerRef}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onMouseEnter={() => {
                setShowVolumeBar(true)
                clearTimeout(timerId.current)
            }}
            onMouseLeave={() => {
                timerId.current = setTimeout(() => {
                    setShowVolumeBar(false)
                }, 2000)
            }}
        >
            {showVolumeBar && (
                <Box
                    display="flex"
                    justifyContent="center"
                    position="absolute"
                    bottom="100%"
                    height={140}
                    width={30}
                    overflow="hidden"
                    alignItems="center"
                >
                    <Input
                        type="range"
                        value={value}
                        onChange={e => setValue(+e.target.value)}
                        onMouseDown={() => setMouseDownValue(value)}
                        onMouseUp={() => setMouseUpValue(value)}
                    />
                </Box>
            )}
            <button
                onClick={() => {
                    if (mouseUpValue !== 0) {
                        value !== 0 ? setValue(0) : setValue(mouseUpValue)
                    } else {
                        value !== 0 ? setValue(0) : setValue(mouseDownValue)
                    }
                }}
            >
                <SoundIcon size={20} muted={value === 0} />
            </button>
        </Box>
    )
}
