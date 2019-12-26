import * as React from "react"
import { Route, Link, useLocation, Redirect } from "react-router-dom"
import { Transition } from "react-transition-group"
import { TransitionStatus } from "react-transition-group/Transition"
import styled from "styled-components"

interface IFadeProps {
    duration: number
    state: TransitionStatus
    shouldTransform: boolean
}

const FadeWrapper = styled.div<IFadeProps>`
    position: absolute;
    left: 15px;
    right: 15px;
    transition: ${({ duration }) => `transform ${duration}ms`};
    transform: ${({ state, shouldTransform }) => {
        if (!shouldTransform) {
            return ""
        }

        let scale: number | null

        switch (state) {
            case "entering":
                scale = 1.2
                break
            case "entered":
                scale = 1
                break
            case "exiting":
                scale = 0.8
                break
            case "exited":
                scale = 1
                break
            default:
                scale = 1
        }

        return `scale(${scale})`
    }};
`

const Item1 = () => {
    return <h4>Item 1</h4>
}

const Item2 = () => {
    return <h4>Item 2</h4>
}

const routes = [
    { path: "/page-b/item-1", name: "Item-1", Component: Item1 },
    { path: "/page-b/item-2", name: "Item-2", Component: Item2 },
]

function PageB() {
    const location = useLocation() || {}

    // set default page to /about/item-1
    if (location.pathname === "/page-b") {
        return <Redirect to="/page-b/item-1" />
    }

    return (
        <div>
            <h1>Pages B</h1>
            <h2>Items</h2>
            <ul>
                {routes.map(route => (
                    <li key={route.path}>
                        <Link key={route.path} to={route.path}>
                            {route.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* wrap elem must have pos relative */}
            <div style={{ position: "relative" }}>
                {routes.map(({ path, Component }) => (
                    <Route key={path} path={path}>
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
                                        // do not do transform transition when leaving /page-b page
                                        shouldTransform={location.pathname.includes(
                                            "/page-b"
                                        )}
                                    >
                                        <Component />
                                    </FadeWrapper>
                                )}
                            </Transition>
                        )}
                    </Route>
                ))}
            </div>
        </div>
    )
}

export default PageB
