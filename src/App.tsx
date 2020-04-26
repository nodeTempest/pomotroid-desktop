import * as React from "react"
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom"
import { Provider } from "react-redux"

import { store } from "@state/store"
import { routes } from "@constants/index"
import { AppPage, MenuPage } from "@pages/index"
import { GlobalStyle } from "@styled/GlobalStyle"
import { AppLayout } from "@layouts/index"

export const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <GlobalStyle />
                <AppLayout>
                    <Switch>
                        <Redirect exact from="/" to={routes.app.name} />
                        <Route path={routes.app.name} component={AppPage} />
                        <Route path={routes.menu.name} component={MenuPage} />
                    </Switch>
                </AppLayout>
            </Router>
        </Provider>
    )
}
