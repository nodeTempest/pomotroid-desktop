import React, { FunctionComponent } from "react"
import { useLocation } from "react-router-dom"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import styled from "styled-components"

import { getLevelName } from "@utils"

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

export const FadeTransition: FunctionComponent<{}> = ({ children }) => {
    const { pathname } = useLocation()
    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                classNames="fade"
                key={getLevelName(pathname, 1)}
                timeout={250}
                appear={false}
            >
                <TransitionContainer>{children}</TransitionContainer>
            </CSSTransition>
        </SwitchTransition>
    )
}
