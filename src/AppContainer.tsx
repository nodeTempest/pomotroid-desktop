import React, { FunctionComponent } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"

import { store } from "@state/store"
import { GlobalStyle, theme } from "@styled"

export const AppContainer: FunctionComponent<{}> = ({ children }) => {
    return (
        <Provider store={store}>
            <Router>
                <GlobalStyle />
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </Router>
        </Provider>
    )
}
