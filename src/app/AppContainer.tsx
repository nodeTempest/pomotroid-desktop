import React from "react"
import { HashRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import { PersistGate } from "redux-persist/integration/react"

import { store, persistor } from "@state"
import { GlobalStyle, theme } from "@styled"

export const AppContainer: React.FC = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor as any} loading={null}>
                <Router>
                    <GlobalStyle />
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                </Router>
            </PersistGate>
        </Provider>
    )
}
