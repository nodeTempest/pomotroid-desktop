import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"

import { store } from "@state"
import { GlobalStyle, theme } from "@styled"

export const AppContainer: React.FC = ({ children }) => {
    return (
        <Provider store={store}>
            <Router>
                <GlobalStyle />
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </Router>
        </Provider>
    )
}
