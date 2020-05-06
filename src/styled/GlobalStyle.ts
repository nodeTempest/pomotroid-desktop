import { createGlobalStyle, css } from "styled-components"
import { theme } from "./theme"

export const GlobalStyle = createGlobalStyle`${css`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: OpenSans;
        font-size: 15px;
        color: ${theme.palette.text.light};
    }

    @font-face {
        font-family: "OpenSans";
        font-weight: 100 300;
        src: url(/fonts/OpenSans/OpenSans-Light.ttf);
    }

    @font-face {
        font-family: "OpenSans";
        font-weight: 400;
        src: url(/fonts/OpenSans/OpenSans-Regular.ttf);
    }

    @font-face {
        font-family: "OpenSans";
        font-weight: 500 600;
        src: url(/fonts/OpenSans/OpenSans-SemiBold.ttf);
    }

    @font-face {
        font-family: "OpenSans";
        font-weight: 700;
        src: url(/fonts/OpenSans/OpenSans-Bold.ttf);
    }

    @font-face {
        font-family: "OpenSans";
        font-weight: 800 900;
        src: url(/fonts/OpenSans/OpenSans-ExtraBold.ttf);
    }
`}
`
