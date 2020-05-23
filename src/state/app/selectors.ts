import { createSelector } from "@reduxjs/toolkit"
import * as R from "ramda"

import { RootStateType } from "@state"
import { MINUTE } from "@constants"

import { StagesType, DurationsType } from "./slice"

export const currentStageSelector = createSelector<
    RootStateType,
    StagesType[],
    number,
    StagesType
>(
    state => state.app.stagesPattern,
    state => state.app.currentStageIndex,
    (pattern, index) => pattern[index]
)

export const currentStageDurationSelector = createSelector<
    RootStateType,
    StagesType,
    DurationsType,
    DurationsType[StagesType]
>(
    currentStageSelector,
    state => state.app.durations,
    (stage, durations) => durations[stage]
)

export const totalRoundsSelector = createSelector<
    RootStateType,
    StagesType[],
    number
>(
    state => state.app.stagesPattern,
    pattern => pattern.length / 2
)

export const currentRoundSelector = createSelector<
    RootStateType,
    number,
    number
>(
    state => state.app.currentStageIndex,
    currentStageIndex => 1 + Math.floor(currentStageIndex / 2)
)

export const durationsSelector = createSelector<
    RootStateType,
    DurationsType,
    DurationsType
>(
    state => state.app.durations,
    durations => R.map(ms => ms / MINUTE, durations)
)
