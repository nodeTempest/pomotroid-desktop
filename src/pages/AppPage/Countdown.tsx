import React from "react"
import moment from "moment"

import { theme } from "@styled"
import { describeArc } from "@utils"
import { StagesType } from "@state"

interface IProps {
    stage: StagesType
    timeMs: number
}

export const Countdown: React.FC<IProps> = ({ stage, timeMs }) => {
    // because moment.js floors seconds
    // when timer is stopped between ticks time must be ceiled
    const time = moment.utc(timeMs)
    if (time.milliseconds()) {
        time.add(1, "seconds")
    }

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
                strokeWidth={4}
                d={describeArc(50, 50, 45, 0, 270)}
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
                {time.format("mm : ss")}
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
