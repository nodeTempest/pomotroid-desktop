import * as R from "ramda"
import { createSelector } from "@reduxjs/toolkit"

import { StagesType, IApp } from "./slice"

export const createStagesPattern = R.compose(
    R.update<StagesType>(-1, "lbreak"),
    R.flatten,
    R.repeat<StagesType[]>(["work", "sbreak"])
)

export const getCurrentRound = createSelector<IApp, number, number>(
    app => app.currentStageIndex,
    currentStageIndex => 1 + Math.floor(currentStageIndex / 2)
)
