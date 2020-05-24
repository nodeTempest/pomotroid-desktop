import { createAction } from "@reduxjs/toolkit"

export const startTimer = createAction<number>("app/startTimer")
export const clearTimer = createAction("app/clearTimer")
export const timerIsOver = createAction("app/timerIsOver")
