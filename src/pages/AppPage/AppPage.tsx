import React from "react"

import { Countdown } from "./Countdown"
import { Rounds } from "./Rounds"
import { PlayButton } from "./PlayButton"
import { ResetButton } from "./ResetButton"

export const AppPage = () => {
    return (
        <div>
            <div>
                <Countdown />
                <PlayButton />
                <Rounds />
                <ResetButton />
            </div>
        </div>
    )
}
