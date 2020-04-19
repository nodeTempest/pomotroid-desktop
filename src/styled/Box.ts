import { compose } from "redux"

import styled from "styled-components"

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

// IBoxProps type is too complicated for TypeScript type inference engine
// too much work is required to specify it
// best solution is to make it { [index: string]: any }
interface IBoxProps {
    [index: string]: any
}

const boxContainer = compose<IBoxProps>(breakpoints, css, composeStyles)

const styles = boxContainer(
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

const Box = styled.div<IBoxProps>`
    ${styles}
`

export default Box
