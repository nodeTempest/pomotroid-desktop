import * as React from "react"
import { Route, Redirect, Switch } from "react-router-dom"

import { routes } from "@constants/index"
import { AppPage, MenuPage } from "@pages/index"
import { AppLayout } from "@layouts/index"
import { AppContainer } from "./AppContainer"

export const App = () => {
    return (
        <AppContainer>
            <AppLayout>
                <Switch>
                    <Redirect exact from="/" to={routes.app.name} />
                    <Route path={routes.app.name} component={AppPage} />
                    <Route path={routes.menu.name} component={MenuPage} />
                </Switch>
            </AppLayout>
        </AppContainer>
    )
}
