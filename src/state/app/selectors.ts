import { createSelector } from "@reduxjs/toolkit"
import * as R from "ramda"

import { RootStateType } from "@state"
import { MINUTE } from "@constants"

import { stagesType, IDurations, IApp } from "./slice"
import { getCurrentStage } from "./utils"

export const currentStageSelector = createSelector<
    RootStateType,
    IApp,
    stagesType
>(state => state.app, getCurrentStage)

export const currentStageDurationSelector = createSelector<
    RootStateType,
    stagesType,
    IDurations,
    IDurations[stagesType]
>(
    currentStageSelector,
    state => state.app.durations,
    (stage, durations) => durations[stage]
)

export const totalRoundsSelector = createSelector<
    RootStateType,
    stagesType[],
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
    IDurations,
    IDurations
>(
    state => state.app.durations,
    durations => R.map(ms => ms / MINUTE, durations)
)
