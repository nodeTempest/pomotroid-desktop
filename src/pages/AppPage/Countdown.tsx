import React, { useState, useEffect } from "react"
import moment from "moment"
import { useRafLoop, useUpdate } from "react-use"

import { theme } from "@styled"
import { describeArc, arcAnimationFrequency } from "@utils"
import { StagesType } from "@state"
import { MINUTE } from "@constants"

interface IProps {
    stage: StagesType
    timeMs: number
    paused: boolean
    currentStageDuration: number
}

export const Countdown: React.FC<IProps> = ({
    stage,
    timeMs,
    paused,
    currentStageDuration,
}) => {
    const update = useUpdate()
    const [startMark, setStartMark] = useState(0)
    const [angle, setAngle] = useState(360)
    const [frequency, setFrequency] = useState(0)

    const [loopStop, loopStart] = useRafLoop(() => {
        const now = Date.now()
        const deltaTime = (now - (startMark || Date.now())) / 1000

        setAngle(angle => {
            const newAngle = angle - deltaTime * frequency
            return newAngle <= 0 ? 0 : newAngle
        })

        setStartMark(now)
    }, false)

    const startAnimation = () => {
        setStartMark(0)
        loopStart()
        update()
    }

    const stopAnimation = () => {
        loopStop()
        update()
    }

    useEffect(() => {
        paused ? stopAnimation() : startAnimation()
    }, [paused])

    useEffect(() => {
        setFrequency(arcAnimationFrequency(currentStageDuration + 1000))
        setAngle(360)
    }, [currentStageDuration])

    const displayStageName =
        stage === "work"
            ? "WORK"
            : stage === "sbreak"
            ? "SHORT BREAK"
            : stage === "lbreak"
            ? "LONG BREAK"
            : ""

    return (
        <svg viewBox="0 0 100 100" width="230" height="230">
            <path
                strokeWidth={1}
                d={describeArc(50, 50, 45, 0, 360)}
                stroke={theme.palette.button.fg.dark}
                fill="none"
            />
            <path
                strokeWidth={4}
                d={describeArc(50, 50, 45, 0, angle)}
                stroke={theme.palette.stages[stage]}
                fill="none"
                strokeLinecap="round"
            />
            <text
                x="50"
                y="45"
                alignmentBaseline="central"
                textAnchor="middle"
                fontSize="20"
                fill={theme.palette.text.light}
            >
                {moment.utc(timeMs).format("mm : ss")}
            </text>
            <text
                x="50"
                y="70"
                alignmentBaseline="central"
                textAnchor="middle"
                fontSize="7"
                fill={theme.palette.text.light}
            >
                {displayStageName}
            </text>
        </svg>
    )
}
