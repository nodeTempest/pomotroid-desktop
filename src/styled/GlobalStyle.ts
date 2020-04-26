import { createGlobalStyle, css } from "styled-components"

export const GlobalStyle = createGlobalStyle`${css`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`}
`
