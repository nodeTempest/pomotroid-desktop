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

type UnpackStyleFunction<T> = T extends StyleFunction<infer U> ? U : never

const composedStyle = breakpoints(
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

const Box = styled.div<UnpackStyleFunction<typeof composedStyle>>`
    ${composedStyle}
`

export default Box
