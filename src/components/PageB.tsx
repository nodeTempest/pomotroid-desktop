import * as React from "react"
import { Route, Link, useLocation, Redirect } from "react-router-dom"

const Item1 = () => {
    return <h4>Item 1</h4>
}

const Item2 = () => {
    return <h4>Item 2</h4>
}

function PageB() {
    const location = useLocation() || {}

    // set default page to /about/item-1
    if (location.pathname === "/page-b") {
        return <Redirect to="/page-b/item-1" />
    }

    return (
        <div>
            <h1>Page B</h1>
            <h2>Items</h2>
            <ul>
                <Link to={"/page-b/item-1"}>Item-1</Link>
                <Link to={"/page-b/item-2"}>Item-2</Link>
            </ul>
            <Route path="/page-b/item-1" component={Item1} />
            <Route path="/page-b/item-2" component={Item2} />
        </div>
    )
}

export default PageB
