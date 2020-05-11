import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import { NavBar } from "@layouts/NavBar"
import { Box } from "@styled/Box"
import { getLevelName } from "@utils"
import { routes } from "@constants"

interface ITransitionContainer {
    onAppPage: boolean
}

// need to freeze app page for transitions
// so when app page enters transition is immediate i.e.
// its duration is 0
// and when app page exits transition is delayed
const TransitionContainer = styled.div<ITransitionContainer>`
    height: 100%;
    width: 100%;
    position: absolute;
    transition: all ${props => (props.onAppPage ? 0 : 250)}ms;

    &.slide-enter {
        transform: translateX(-100%);
    }
    &.slide-enter-active {
        transform: translateX(0%);
    }
    &.slide-exit {
        transform: translateX(0%);
        transition-delay: ${props => (props.onAppPage ? 250 : 0)}ms;
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
                key={getLevelName(pathname, 0)}
                timeout={250}
            >
                <TransitionContainer
                    onAppPage={pathname.includes(routes.app.name)}
                >
                    {children}
                </TransitionContainer>
            </CSSTransition>
        </TransitionGroup>
    )
}

export const AppLayout: FunctionComponent<{}> = ({ children }) => {
    return (
        <Box
            overflow="hidden"
            height={480}
            width={360}
            ml={10}
            mt={10}
            bgcolor="bg.dark"
            position="relative"
        >
            <NavBar />
            <Box height={0.86} width={1} position="relative">
                <SlideTransition>{children}</SlideTransition>
            </Box>
        </Box>
    )
}
