import React from "react"
import { useLocation } from "react-router-dom"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import styled from "styled-components"

import { getPathNameLevel } from "@utils"
import { routes } from "@routing"

const TransitionContainer = styled.div`
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

export const FadeTransition: React.FC = ({ children }) => {
    const { pathname } = useLocation()
    const defaultPage = routes.menu.next.durations.name

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                classNames="fade"
                key={
                    getPathNameLevel(pathname, 1) ||
                    defaultPage.replace("/", "")
                }
                timeout={250}
                appear={false}
            >
                <TransitionContainer>{children}</TransitionContainer>
            </CSSTransition>
        </SwitchTransition>
    )
}
