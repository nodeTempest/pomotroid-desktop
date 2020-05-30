import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

import { OpenMenuIcon } from "./OpenMenuIcon"
import { CloseWindowIcon } from "./CloseWindowIcon"
import { MinimizeWindowIcon } from "./MinimizeWindowIcon"

import { Box } from "@styled"
import { routes } from "@routing"
import { closeWindow, minimizeWindow, hideWindow } from "@services"
import { RootStateType } from "@state"

const DragArea = styled(Box)`
    -webkit-app-region: drag;
`

const menuRoutes = routes.menu.next
const defaultMenuPage = menuRoutes.durations.name

export const NavBar: React.FC = () => {
    const location = useLocation()
    const onMenu = location.pathname.includes(routes.menu.name)

    const [lastVisitedMenuTab, setLastVisitedMenuTab] = React.useState(
        routes.menu.name + defaultMenuPage
    )

    useEffect(() => {
        if (onMenu) {
            setLastVisitedMenuTab(location.pathname)
        }
    }, [location, onMenu])

    const minimizedToTray = useSelector(
        (state: RootStateType) => state.settings.minimizeToTray
    )

    const handleCloseWindow = closeWindow
    const handleMinimizeWindow = minimizedToTray ? hideWindow : minimizeWindow

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            px={4}
            alignItems="flex-start"
            height={0.14}
        >
            <Box pt={4}>
                <Link to={onMenu ? routes.app.name : lastVisitedMenuTab}>
                    <OpenMenuIcon active={!onMenu} size={25} />
                </Link>
            </Box>
            <DragArea
                display="flex"
                height={1}
                flexGrow={1}
                justifyContent="space-between"
                color="text.highlight"
                pt={4}
            >
                <Box ml={4} width={15} />
                Pomotroid
                <Box width={0} />
            </DragArea>
            <Box
                pt={4}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-start"
            >
                <Box mr={4}>
                    <button onClick={handleMinimizeWindow}>
                        <MinimizeWindowIcon size={20} />
                    </button>
                </Box>

                <button onClick={handleCloseWindow}>
                    <CloseWindowIcon size={20} />
                </button>
            </Box>
        </Box>
    )
}
