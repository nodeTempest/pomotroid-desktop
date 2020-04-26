import * as React from "react"
import { FunctionComponent } from "react"
import { NavBar } from "@components/NavBar"

export const AppLayout: FunctionComponent<object> = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}
