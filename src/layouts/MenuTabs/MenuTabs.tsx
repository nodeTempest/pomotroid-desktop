import React, { FunctionComponent } from "react"
import { NavLink, useRouteMatch } from "react-router-dom"

import { routes } from "@constants"
import { Box } from "@styled"

const menuRoutes = routes.menu.next

export const MenuTabs: FunctionComponent<{}> = () => {
    const { path } = useRouteMatch()

    return (
        <Box height={0.07} display="flex">
            <Box width={4 / 12} textAlign="center">
                <NavLink to={path + menuRoutes.durations.name}>
                    durations
                </NavLink>
            </Box>
            <Box width={4 / 12}>
                <NavLink to={path + menuRoutes.settings.name}>settings</NavLink>
            </Box>
            <Box width={4 / 12}>
                <NavLink to={path + menuRoutes.info.name}>info</NavLink>
            </Box>
        </Box>
    )
}
