import * as React from "react"
import { FunctionComponent } from "react"
import { compose } from "redux"
import styled, { StyledComponent } from "styled-components"
import {
    breakpoints,
    css,
    compose as composeStyles,
    borders,
    display,
    flexbox,
    palette,
    positions,
    shadows,
    sizing,
    spacing,
    typography,
} from "@material-ui/system"

// IHeaderProps type is too complicated for TypeScript type inference engine
// too much work is required to specify it
// best solution is to make it { [index: string]: any }
interface IHeaderProps {
    [index: string]: any
}

const headerContainer = compose<IHeaderProps>(breakpoints, css, composeStyles)

const styles = headerContainer(
    borders,
    display,
    flexbox,
    palette,
    positions,
    shadows,
    sizing,
    spacing,
    typography
)

type HeadersTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type IHeadersMap = {
    [P in HeadersTypes]: StyledComponent<P, any, IHeaderProps, never>
}

const HeadersMap = ["h1", "h2", "h3", "h4", "h5", "h6"].reduce(
    (acc, headerName) => ({
        ...acc,
        [headerName]: styled[headerName]<IHeaderProps>`
            ${styles}
        `,
    }),
    {} as IHeadersMap
)

interface IProps {
    as: HeadersTypes
}

const Header: FunctionComponent<IProps & IHeaderProps> = ({
    children,
    as,
    ...rest
}) => {
    const Component = HeadersMap[as]
    return <Component {...rest}>{children}</Component>
}

export default Header
