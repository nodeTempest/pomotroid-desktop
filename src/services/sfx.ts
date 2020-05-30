import work from "@assets/sfx/work.mp3"
import sbreak from "@assets/sfx/sbreak.mp3"
import lbreak from "@assets/sfx/lbreak.mp3"
import { StagesType } from "@state"

const sfx = {
    work: new Audio(work),
    sbreak: new Audio(sbreak),
    lbreak: new Audio(lbreak),
}

export const setSfxVolume = (value: number) =>
    Object.keys(sfx).forEach(key => (sfx[key].volume = value / 100))

export const playStageSfx = (stage: StagesType) => sfx[stage].play()
