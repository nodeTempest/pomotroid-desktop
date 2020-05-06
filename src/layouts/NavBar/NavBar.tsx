import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

import { OpenMenuIcon } from "./OpenMenuIcon"
import { CloseWindowIcon } from "./CloseWindowIcon"
import { MinimizeWindowIcon } from "./MinimizeWindowIcon"
import { Box } from "@styled"
import { routes } from "@constants"

const StyledLink = styled(Link)`
    display: block;
    height: fit-content;
`

export const NavBar = () => {
    const location = useLocation()
    const onMenu = location.pathname.includes(routes.menu.name)

    return (
        <Box display="flex" justifyContent="space-between">
            <Box width={1 / 3}>
                <StyledLink to={onMenu ? routes.app.name : routes.menu.name}>
                    <OpenMenuIcon active={!onMenu} size={25} />
                </StyledLink>
            </Box>
            <Box width={1 / 3} color="text.highlight" textAlign="center">
                Pomotroid
            </Box>
            <Box width={1 / 3} display="flex" justifyContent="flex-end">
                <Box mr={4}>
                    <MinimizeWindowIcon size={20} />
                </Box>
                <CloseWindowIcon size={20} />
            </Box>
        </Box>
    )
}
