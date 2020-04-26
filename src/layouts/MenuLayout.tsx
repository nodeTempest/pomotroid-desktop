import * as React from "react"
import { FunctionComponent } from "react"

export const MenuLayout: FunctionComponent<object> = ({ children }) => {
    return (
        <div>
            <div>Memu Layout</div>
            {children}
        </div>
    )
}
