const { app, BrowserWindow, globalShortcut } = require("electron")

const isDev = require("electron-is-dev")
const path = require("path")

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 360,
        height: 480,
        frame: false,
        show: false,
        resizable: isDev,
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

    mainWindow.on("ready-to-show", () => {
        mainWindow.show()
        mainWindow.focus()
    })

    if (isDev) {
        globalShortcut.register("f5", () => mainWindow.reload())

        const {
            default: installExtension,
            REDUX_DEVTOOLS,
        } = require("electron-devtools-installer")

        installExtension(REDUX_DEVTOOLS)
    }
}

app.on("ready", createWindow)

app.on("window-all-closed", () => app.quit())
