import * as React from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { Provider } from "react-redux"

import store from "./state/store"

import NavBar from "./components/NavBar"
import PageA from "./components/PageA"
import PageB from "./components/PageB"

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

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <>
                    <GlobalStyle />
                    <NavBar />
                    {/* wrap elem must have pos relative */}
                    <div>
                        {routes.map(({ path, Component }) => (
                            <Route key={path} path={path} exact={path === "/"}>
                                {childrenProps => (
                                    <Component {...childrenProps} />
                                )}
                            </Route>
                        ))}
                    </div>
                </>
            </Router>
        </Provider>
    )
}

export default App
