import React, { FunctionComponent } from "react"
import styled from "styled-components"

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

export const Volume: FunctionComponent<{}> = () => {
    const [showVolumeBar, setShowVolumeBar] = React.useState(false)

    const timerId = React.useRef<number>(null) as React.MutableRefObject<number>
    const containerRef = React.useRef<HTMLDivElement>(null)

    useOnClickOutside(containerRef, () => setShowVolumeBar(false))

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
                    <Input type="range" />
                </Box>
            )}
            <button>
                <SoundIcon size={20} muted={false} />
            </button>
        </Box>
    )
}
