import * as R from "ramda"

import { stagesType } from "./slice"

export const createStagesPattern = R.compose(
    R.update<stagesType>(-1, "lbreak"),
    R.flatten,
    R.repeat<stagesType[]>(["work", "sbreak"])
)
