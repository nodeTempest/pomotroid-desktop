const {
    app,
    ipcMain,
    BrowserWindow,
    globalShortcut,
    Tray,
    nativeImage,
} = require("electron")

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

    const icon = nativeImage.createFromDataURL(
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiPg0KCTxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIiBmaWxsPSIjMmYzODRiIiAvPg0KCTxjaXJjbGUNCgkJY3g9IjUwIg0KCQljeT0iNTAiDQoJCXI9IjI5Ig0KCQlmaWxsPSJub25lIg0KCQlzdHJva2U9IiNmZTRkNGMiDQoJCXN0cm9rZS13aWR0aD0iMTgiDQoJLz4NCjwvc3ZnPg=="
    )

    const tray = new Tray(icon)

    ipcMain.on("set-tray-image", (_, base64) => {
        const img = nativeImage.createFromDataURL(base64)
        tray.setImage(img)
    })

    app.on("before-quit", () => tray.destroy())
}

app.on("ready", createWindow)

app.on("window-all-closed", () => app.quit())
