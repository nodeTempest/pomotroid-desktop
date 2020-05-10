import * as React from "react"
import { Link, useLocation } from "react-router-dom"

import { OpenMenuIcon } from "./OpenMenuIcon"
import { CloseWindowIcon } from "./CloseWindowIcon"
import { MinimizeWindowIcon } from "./MinimizeWindowIcon"
import { Box } from "@styled"
import { routes } from "@constants"

export const NavBar = () => {
    const location = useLocation()
    const onMenu = location.pathname.includes(routes.menu.name)

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            pt={4}
            px={4}
            alignItems="flex-start"
            height={0.1}
        >
            <Box width={1 / 3}>
                <Link to={onMenu ? routes.app.name : routes.menu.name}>
                    <OpenMenuIcon active={!onMenu} size={25} />
                </Link>
            </Box>
            <Box width={1 / 3} color="text.highlight" textAlign="center">
                Pomotroid
            </Box>
            <Box
                width={1 / 3}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-start"
            >
                <Box mr={4}>
                    <button>
                        <MinimizeWindowIcon size={20} />
                    </button>
                </Box>

                <button>
                    <CloseWindowIcon size={20} />
                </button>
            </Box>
        </Box>
    )
}
