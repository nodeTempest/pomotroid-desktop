import React, { FunctionComponent } from "react"
import { NavLink, useRouteMatch, useLocation } from "react-router-dom"
import styled from "styled-components"

import { routes } from "@routing"
import { Box } from "@styled"

import { ClockIcon } from "./ClockIcon"
import { CogIcon } from "./CogIcon"
import { InfoIcon } from "./InfoIcon"

const StyledNavLink = styled(NavLink)`
    position: relative;
    width: 33.3%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 250ms;

    :hover {
        background-color: ${props => props.theme.palette.button.bg.hover};
    }

    :after {
        content: "";
        background-color: ${props => props.theme.palette.button.fg.hover};
        position: absolute;
        bottom: 0;
        height: 2px;
        transition: all 250ms;
        width: 1px;
        visibility: hidden;
    }

    &.active:after {
        width: 35%;
        visibility: visible;
    }
`

const menuRoutes = routes.menu.next

export const MenuTabs: FunctionComponent<{}> = () => {
    const { path } = useRouteMatch()

    return (
        <Box bgcolor="bg.dark" height={0.09} display="flex">
            <StyledNavLink to={path + menuRoutes.durations.name}>
                <ClockIcon size={24} />
            </StyledNavLink>

            <StyledNavLink to={path + menuRoutes.settings.name}>
                <CogIcon size={25} />
            </StyledNavLink>

            <StyledNavLink to={path + menuRoutes.info.name}>
                <InfoIcon size={24} />
            </StyledNavLink>
        </Box>
    )
}
