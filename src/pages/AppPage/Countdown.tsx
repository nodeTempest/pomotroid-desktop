import React, { FunctionComponent } from "react"
import { theme } from "@styled"

import { describeArc } from "@utils"

export const Countdown: FunctionComponent<{}> = () => {
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
                25 : 00
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
