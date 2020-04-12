import * as React from "react"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Redirect,
} from "react-router-dom"
import { Transition } from "react-transition-group"
import { TransitionStatus } from "react-transition-group/Transition"
import styled from "styled-components"
import { Provider } from "react-redux"

import store from "./state/store"

import PageA from "./components/PageA"
import PageB from "./components/PageB"

import Box from "./styled/Box"
import GlobalStyle from "./styled/GlobalStyle"

const routes = [
    {
        path: "/",
        name: "Home",
        Component: () => <Redirect to="/page-a" />,
        exact: true,
    },
    { path: "/page-a", Component: PageA, exact: true },
    { path: "/page-b", Component: PageB, exact: false },
]

interface IFadeProps {
    duration: number
    state: TransitionStatus
}

const FadeWrapper = styled.div<IFadeProps>`
    position: absolute;
    left: 15px;
    right: 15px;
    transition: opacity ${({ duration }) => duration}ms;
    opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
`

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <>
                    <GlobalStyle />
                    <div>
                        {routes.map(route => (
                            <NavLink
                                key={route.path}
                                to={route.path}
                                activeClassName="active"
                            >
                                {route.path}
                            </NavLink>
                        ))}
                    </div>
                    {/* wrap elem must have pos relative */}
                    <div>
                        {routes.map(({ path, Component }) => (
                            <Route key={path} path={path} exact={path === "/"}>
                                {({ match }) => (
                                    <Transition
                                        in={match != null}
                                        timeout={300}
                                        unmountOnExit
                                        mountOnEnter
                                    >
                                        {state => (
                                            <FadeWrapper
                                                state={state}
                                                duration={300}
                                            >
                                                <Component />
                                            </FadeWrapper>
                                        )}
                                    </Transition>
                                )}
                            </Route>
                        ))}
                    </div>
                    <Box p={30} border={3} borderColor="black">
                        Hello World
                    </Box>
                </>
            </Router>
        </Provider>
    )
}

export default App
