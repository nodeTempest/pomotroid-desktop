import React, { FunctionComponent } from "react"
import { Redirect, Route, Switch, RouteComponentProps } from "react-router-dom"

import { MenuLayout } from "@layouts"
import { routes } from "@constants"
import { DurationsPage, InfoPage, SettingsPage } from "@pages"

const menuRoutes = routes.menu.next

export const MenuPage: FunctionComponent<RouteComponentProps> = ({
    match: { path },
}) => {
    return (
        <MenuLayout>
            <Switch>
                <Redirect
                    exact
                    from={path}
                    to={path + menuRoutes.durations.name}
                />
                <Route
                    path={path + menuRoutes.durations.name}
                    component={DurationsPage}
                />
                <Route
                    path={path + menuRoutes.info.name}
                    component={InfoPage}
                />
                <Route
                    path={path + menuRoutes.settings.name}
                    component={SettingsPage}
                />
            </Switch>
        </MenuLayout>
    )
}
