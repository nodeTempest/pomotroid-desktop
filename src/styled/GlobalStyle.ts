import { createGlobalStyle, css } from "styled-components"

const GlobalStyle = createGlobalStyle`${css`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`}
`

export default GlobalStyle
