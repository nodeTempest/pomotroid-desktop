import React, { FunctionComponent } from "react"
import { theme } from "@styled"

import { describeArc } from "@utils"

interface IProps {
    size?: number
}

export const Countdown: FunctionComponent<{}> = () => {
    const d = describeArc
    return (
        <svg viewBox="0 0 100 100" width="230" height="230">
            <path
                strokeWidth={4}
                d={describeArc(50, 50, 45, 0, 270)}
                stroke={theme.palette.stages.work}
                fill="none"
            />
            <text
                x="50"
                y="45"
                alignment-baseline="central"
                text-anchor="middle"
                font-size="20"
                fill={theme.palette.text.light}
            >
                25 : 00
            </text>
            <text
                x="50"
                y="70"
                alignment-baseline="central"
                text-anchor="middle"
                font-size="8"
                fill={theme.palette.text.light}
            >
                WORK
            </text>
        </svg>
    )
}
