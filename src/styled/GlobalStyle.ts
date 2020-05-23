import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        cursor: default;
    }

    body {
        font-family: OpenSans;
        font-size: 15px;
        color: ${theme.palette.text.light};
    }

    button {
        background: none;
        outline: none;
        border: none;
    }

    a {
        display: inline-block;
    }

    svg {
        display: block;
    }

    input {
        outline: none;
    }
`
