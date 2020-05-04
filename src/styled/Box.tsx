import React, { FunctionComponent } from "react"
import styled from "styled-components"
import {
    breakpoints,
    css,
    compose,
    borders,
    display,
    flexbox,
    palette,
    positions,
    shadows,
    sizing,
    spacing,
    typography,
    StyleFunction,
} from "@material-ui/system"

type StylerProps = UnpackStyleFunction<typeof styler>
type UnpackStyleFunction<T> = T extends StyleFunction<infer U> ? U : never

const styler = breakpoints(
    css(
        compose(
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
    )
)

const Component = styled.div<StylerProps>(styler)

export const Box: FunctionComponent<StylerProps> = ({ children, ...rest }) => {
    return <Component {...rest}>{children}</Component>
}
