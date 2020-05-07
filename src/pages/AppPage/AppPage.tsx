import React from "react"

import { Countdown } from "./Countdown"
import { PlayButton } from "./PlayButton"

export const AppPage = () => {
    return (
        <div>
            <div>
                <Countdown />
                <PlayButton />
            </div>
        </div>
    )
}
