import { createSelector } from "@reduxjs/toolkit"
import * as R from "ramda"

import { RootStateType } from "@state"
import { MINUTE } from "@constants"

import { StagesType, DurationsType, IApp } from "./slice"
import { getCurrentRound } from "./utils"

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

export const currentRoundSelector = createSelector<RootStateType, IApp, number>(
    state => state.app,
    getCurrentRound
)

export const durationsSelector = createSelector<
    RootStateType,
    DurationsType,
    DurationsType
>(
    state => state.app.durations,
    durations => R.map(ms => ms / MINUTE, durations)
)
