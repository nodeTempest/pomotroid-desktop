import * as React from "react"
import { FunctionComponent } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"

import { store } from "@state/store"
import { GlobalStyle } from "@styled/GlobalStyle"

export const AppContainer: FunctionComponent<object> = ({ children }) => {
    return (
        <Provider store={store}>
            <Router>
                <GlobalStyle />
                {children}
            </Router>
        </Provider>
    )
}
