const electron = require("electron")
const path = require("path")
const isDev = require("electron-is-dev")

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const globalShortcut = electron.globalShortcut

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 360,
        height: 480,
        frame: false,
        webPreferences: {
            devTools: isDev,
            nodeIntegration: true,
        },
    })

    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    )

    mainWindow.on("closed", () => {
        mainWindow = null
    })

    globalShortcut.register("f5", () => mainWindow.reload())
}

app.on("ready", createWindow)
app.on("window-all-closed", () => app.quit())
