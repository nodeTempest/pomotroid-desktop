import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import { getPathNameLevel } from "@utils"
import { routes } from "@routing"

interface ITransitionContainer {
    renderAppPage: boolean
}

// need to freeze app page for transitions
// so when app page enters transition is immediate i.e.
// its duration is 0
// and when app page exits transition is delayed
const TransitionContainer = styled.div<ITransitionContainer>`
    height: 100%;
    width: 100%;
    position: absolute;
    transition: all ${props => (props.renderAppPage ? 0 : 250)}ms;

    &.slide-enter {
        transform: translateX(-100%);
    }
    &.slide-enter-active {
        transform: translateX(0%);
        z-index: ${props => +!props.renderAppPage};
    }
    &.slide-exit {
        transform: translateX(0%);
        transition-delay: ${props => props.renderAppPage && 250}ms;
    }
    &.slide-exit-active {
        transform: translateX(-100%);
    }
`

export const SlideTransition: FunctionComponent<{}> = ({ children }) => {
    const { pathname } = useLocation()

    return (
        <TransitionGroup component={null}>
            <CSSTransition
                classNames="slide"
                key={getPathNameLevel(pathname, 0)}
                timeout={250}
            >
                <TransitionContainer
                    renderAppPage={pathname.includes(routes.app.name)}
                >
                    {children}
                </TransitionContainer>
            </CSSTransition>
        </TransitionGroup>
    )
}
