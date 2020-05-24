import * as R from "ramda"
import { createSelector } from "@reduxjs/toolkit"

import { StagesType, DurationsType, IApp } from "./slice"

export const createStagesPattern = R.compose(
    R.update<StagesType>(-1, "lbreak"),
    R.flatten,
    R.repeat<StagesType[]>(["work", "sbreak"])
)

export const getCurrentStage = createSelector<
    IApp,
    StagesType[],
    number,
    StagesType
>(
    app => app.stagesPattern,
    app => app.currentStageIndex,
    (pattern, index) => pattern[index]
)

export const getCurrentStageDuration = createSelector<
    IApp,
    StagesType,
    DurationsType,
    DurationsType[StagesType]
>(
    getCurrentStage,
    app => app.durations,
    (stage, durations) => durations[stage]
)

export const getCurrentRound = createSelector<IApp, number, number>(
    app => app.currentStageIndex,
    currentStageIndex => 1 + Math.floor(currentStageIndex / 2)
)
