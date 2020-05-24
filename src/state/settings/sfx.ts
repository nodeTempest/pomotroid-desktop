import work from "@assets/sfx/work.mp3"
import sbreak from "@assets/sfx/sbreak.mp3"
import lbreak from "@assets/sfx/lbreak.mp3"

export const sfx = {
    work: new Audio(work),
    sbreak: new Audio(sbreak),
    lbreak: new Audio(lbreak),
}

export const setSfxVolume = (value: number) =>
    Object.keys(sfx).forEach(key => (sfx[key] = value))
