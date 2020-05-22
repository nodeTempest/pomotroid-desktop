import * as R from "ramda"
import { createSelector } from "@reduxjs/toolkit"

import { stagesType, IApp, IDurations } from "./slice"

export const createStagesPattern = R.compose(
    R.update<stagesType>(-1, "lbreak"),
    R.flatten,
    R.repeat<stagesType[]>(["work", "sbreak"])
)

export const getCurrentStage = createSelector<
    IApp,
    stagesType[],
    number,
    stagesType
>(
    app => app.stagesPattern,
    app => app.currentStageIndex,
    (pattern, index) => pattern[index]
)

export const getCurrentStageDuration = createSelector<
    IApp,
    stagesType,
    IDurations,
    IDurations[stagesType]
>(
    getCurrentStage,
    app => app.durations,
    (stage, durations) => durations[stage]
)
