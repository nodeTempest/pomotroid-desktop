import React, { FunctionComponent } from "react"
import moment from "moment"

import { theme } from "@styled"
import { describeArc } from "@utils"

// refactor
type stageTypes = "work" | "sbreak" | "lbreak"

interface IProps {
    stage: stageTypes
    timeMs: number
}

export const Countdown: FunctionComponent<IProps> = ({ timeMs }) => {
    return (
        <svg viewBox="0 0 100 100" width="230" height="230">
            <path
                strokeWidth={4}
                d={describeArc(50, 50, 45, 0, 270)}
                stroke={theme.palette.stages.work}
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
                fontSize="8"
                fill={theme.palette.text.light}
            >
                WORK
            </text>
        </svg>
    )
}
