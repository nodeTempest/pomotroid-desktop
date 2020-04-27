import * as React from "react"
import { FunctionComponent } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"

import { store } from "@state/store"
import { GlobalStyle, theme } from "@styled/index"

export const AppContainer: FunctionComponent<object> = ({ children }) => {
    return (
        <Provider store={store}>
            <Router>
                <GlobalStyle />
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </Router>
        </Provider>
    )
}
