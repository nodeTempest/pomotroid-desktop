import React, { FunctionComponent } from "react"
import { useLocation } from "react-router-dom"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import styled from "styled-components"

import { Box } from "@styled"

import { MenuTabs } from "./MenuTabs"

const getLevelName = (pathname: string, level: number) =>
    pathname === "/" && level === 0
        ? "/"
        : pathname.split("/").filter(Boolean)[level]

const FadeTransition = styled.div`
    transition: all 250ms;
    &.fade-enter {
        opacity: 0;
    }
    &.fade-enter-active {
        opacity: 1;
    }
    &.fade-exit {
        opacity: 1;
    }
    &.fade-exit-active {
        opacity: 0;
    }
`

export const MenuLayout: FunctionComponent<{}> = ({ children }) => {
    const { pathname } = useLocation()
    return (
        <Box bgcolor="bg.light" height={1}>
            <Box px={4} py={2} height={0.91}>
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        classNames="fade"
                        key={getLevelName(pathname, 1)}
                        timeout={250}
                    >
                        <FadeTransition>{children}</FadeTransition>
                    </CSSTransition>
                </SwitchTransition>
            </Box>
            <MenuTabs />
        </Box>
    )
}
