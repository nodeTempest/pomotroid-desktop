const remote = window.require("electron").remote

export const closeWindow = () => remote.getCurrentWindow().close()
export const minimizeWindow = () => remote.getCurrentWindow().minimize()
export const hideWindow = () => remote.getCurrentWindow().hide()
export const setAlwaysOnTop = (value: boolean) =>
    remote.getCurrentWindow().setAlwaysOnTop(value)
