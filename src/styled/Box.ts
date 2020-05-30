import styled from "styled-components"
import {
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

const styler = compose(
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

type UnpackStyleFunction<T> = T extends StyleFunction<infer U> ? U : never
type StylerProps = UnpackStyleFunction<typeof styler>

export const Box = styled.div<StylerProps>(styler)
