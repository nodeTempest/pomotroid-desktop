import * as React from "react"
import { Route, Redirect, Switch } from "react-router-dom"

import { routes } from "@constants"
import { AppPage, MenuPage } from "@pages"
import { AppLayout } from "@layouts"
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
