import React, { FunctionComponent } from "react"
import { NavLink, useRouteMatch } from "react-router-dom"

import { routes } from "@constants"
import { Box } from "@styled"

import { ClockIcon } from "./ClockIcon"
import { CogIcon } from "./CogIcon"
import { InfoIcon } from "./InfoIcon"

const menuRoutes = routes.menu.next

export const MenuTabs: FunctionComponent<{}> = () => {
    const { path } = useRouteMatch()

    return (
        <Box bgcolor="black" height={0.08} display="flex">
            <Box height={1} width={4 / 12} textAlign="center">
                <NavLink to={path + menuRoutes.durations.name}>
                    <ClockIcon />
                </NavLink>
            </Box>
            <Box width={4 / 12}>
                <NavLink to={path + menuRoutes.settings.name}>
                    <CogIcon />
                </NavLink>
            </Box>
            <Box width={4 / 12}>
                <NavLink to={path + menuRoutes.info.name}>
                    <InfoIcon />
                </NavLink>
            </Box>
        </Box>
    )
}
