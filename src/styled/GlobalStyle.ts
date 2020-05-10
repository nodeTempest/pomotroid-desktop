import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"

import OpenSansLight from "@assets/fonts/OpenSans/OpenSans-Regular.ttf"
import OpenSansRegular from "@assets/fonts/OpenSans/OpenSans-Regular.ttf"
import OpenSansSemiBold from "@assets/fonts/OpenSans/OpenSans-Regular.ttf"
import OpenSansBold from "@assets/fonts/OpenSans/OpenSans-Regular.ttf"
import OpenSansExtraBold from "@assets/fonts/OpenSans/OpenSans-Regular.ttf"

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

    @font-face {
        font-family: "OpenSans";
        font-weight: 100 300;
        src: url(${OpenSansLight});
    }

    @font-face {
        font-family: "OpenSans";
        font-weight: 400;
        src: url(${OpenSansRegular});
    }

    @font-face {
        font-family: "OpenSans";
        font-weight: 500 600;
        src: url(${OpenSansSemiBold});
    }

    @font-face {
        font-family: "OpenSans";
        font-weight: 700;
        src: url(${OpenSansBold});
    }

    @font-face {
        font-family: "OpenSans";
        font-weight: 800 900;
        src: url(${OpenSansExtraBold});
    }
`
