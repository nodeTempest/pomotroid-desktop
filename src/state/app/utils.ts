import * as R from "ramda"

import { StagesType } from "./slice"

export const createStagesPattern = R.compose(
    R.update<StagesType>(-1, "lbreak"),
    R.flatten,
    R.repeat<StagesType[]>(["work", "sbreak"])
)
