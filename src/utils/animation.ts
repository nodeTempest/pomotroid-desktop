import { MINUTE } from "@constants"

export const calcDegPerSec = (ms: number) => 360 / ((ms / MINUTE) * 60)
