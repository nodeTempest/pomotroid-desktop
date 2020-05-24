import { MINUTE } from "@constants"

export const arcAnimationFrequency = (ms: number) => 360 / ((ms / MINUTE) * 60)
