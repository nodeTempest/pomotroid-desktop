import React from "react"
import { Route, Redirect, Switch, useLocation } from "react-router-dom"

import { routes } from "@routing"
import { AppPage, MenuPage } from "@pages"
import { AppLayout } from "@layouts"
import { AppContainer } from "./AppContainer"

const AppEntry: React.FC = () => {
    const location = useLocation()
    return (
        <AppLayout>
            <Switch location={location}>
                <Redirect exact from="/" to={routes.app.name} />
                <Route path={routes.app.name} component={AppPage} />
                <Route path={routes.menu.name} component={MenuPage} />
            </Switch>
        </AppLayout>
    )
}

export const App: React.FC = () => (
    <AppContainer>
        <AppEntry />
    </AppContainer>
)
