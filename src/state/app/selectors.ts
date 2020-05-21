import { createSelector } from "@reduxjs/toolkit"
import * as R from "ramda"

import { RootState } from "@state"
import { MINUTE } from "@constants"

import { stagesType, IDurations } from "./slice"

export const currentStageSelector = createSelector<
    RootState,
    stagesType[],
    number,
    stagesType
>(
    state => state.app.stagesPattern,
    state => state.app.currentStageIndex,
    (pattern, index) => pattern[index]
)

export const currentStageDurationSelector = createSelector<
    RootState,
    stagesType,
    IDurations,
    IDurations[stagesType]
>(
    currentStageSelector,
    state => state.app.durations,
    (stage, durations) => durations[stage]
)

export const currentRoundSelector = createSelector<RootState, number, number>(
    state => state.app.currentStageIndex,
    currentStageIndex => 1 + Math.floor(currentStageIndex / 2)
)

export const durationsSelector = createSelector<
    RootState,
    IDurations,
    IDurations
>(
    state => state.app.durations,
    durations => R.map(ms => ms / MINUTE, durations)
)
