const {
    app,
    ipcMain,
    BrowserWindow,
    globalShortcut,
    Tray,
    nativeImage,
    Menu,
} = require("electron")

const isDev = require("electron-is-dev")
const path = require("path")

let mainWindow = null
let tray = null

const createWindow = () => {
    mainWindow = new BrowserWindow({
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

const createTray = img => {
    tray = new Tray(img)
    tray.on("click", () => {
        mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
    })
    tray.setToolTip("Pomotroid\nClick to restore")
    tray.setContextMenu(
        Menu.buildFromTemplate([
            { label: "Exit", type: "normal", role: "quit" },
        ])
    )
}

const removeTray = () => {
    if (tray) {
        tray.destroy()
        tray = null
    }
}

app.on("ready", createWindow)

app.on("window-all-closed", () => app.quit())

app.on("before-quit", removeTray)

ipcMain.on("set-tray-image", (_, base64) => {
    const img = nativeImage.createFromDataURL(base64)

    if (!tray) {
        createTray(img)
    } else {
        tray.setImage(img)
    }
})

ipcMain.on("remove-tray", removeTray)
