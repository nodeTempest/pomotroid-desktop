import * as React from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { Provider } from "react-redux"

import { store } from "@state/store"

import { routes } from "@constants/index"

import { PageA } from "@components/PageA"
import { PageB } from "@components/PageB"

import { GlobalStyle } from "@styled/GlobalStyle"
import { Box } from "@styled/Box"

export const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <GlobalStyle />
                <Box height={480} width={360} border={3}>
                    <Route
                        path="/"
                        render={() => <Redirect to="/page-a" />}
                        exact
                    />
                    <Route path="/page-a" component={PageA} exact />
                    <Route path="/page-b" component={PageB} />
                    <Box as="h2">Header</Box>
                </Box>
            </Router>
        </Provider>
    )
}
