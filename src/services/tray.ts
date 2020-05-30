import { StagesType } from "@state"
import { describeArcCanvas } from "@utils"
import { theme } from "@styled"

const { ipcRenderer } = window.require("electron")

const canvas = document.createElement("canvas")
canvas.width = 100
canvas.height = 100

const ctx = canvas.getContext("2d")!

export const drawTrayImg = (stage: StagesType, degrees: number) => {
    ctx.beginPath()
    ctx.fillStyle = theme.palette.bg.dark
    ctx.lineWidth = 20
    ctx.arc(...describeArcCanvas(50, 50, 50, 0, 360))
    ctx.fill()

    ctx.beginPath()
    ctx.strokeStyle = theme.palette.stages[stage]
    ctx.lineWidth = 14
    ctx.arc(...describeArcCanvas(50, 50, 26, 0, degrees))
    ctx.stroke()

    const dataURL = canvas.toDataURL()

    ipcRenderer.send("set-tray-image", dataURL)
}

export const removeTray = () => {
    ipcRenderer.send("remove-tray")
}
