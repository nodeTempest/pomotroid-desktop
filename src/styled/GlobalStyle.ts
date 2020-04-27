import { createGlobalStyle, css } from "styled-components"

// import RobotoThin from "Roboto-Thin.ttf"
// import RobotoLight from "../assets/fonts/roboto/"
// import RobotoRegular from "../assets/fonts/roboto/"
// import RobotoMedium from "../assets/fonts/roboto/"
// import RobotoBold from "../assets/fonts/roboto/"
// import RobotoBlack from "../assets/fonts/roboto/"

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
