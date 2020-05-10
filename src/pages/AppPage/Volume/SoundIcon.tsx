import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"

const Svg = styled.svg<Required<Pick<IProps, "size">>>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;

    :hover g {
        fill: ${props => props.theme.palette.button.fg.hover};
        stroke: ${props => props.theme.palette.button.fg.hover};
    }

    :hover .arcs path:nth-child(1) {
        stroke: ${props => props.theme.palette.button.fg.hover};
    }

    :hover .arcs path:nth-child(2) {
        fill: ${props => props.theme.palette.button.fg.hover};
    }

    .shapes {
        stroke-linejoin: miter;
        stroke: none;
        stroke: ${props => props.theme.palette.button.fg.dark};
        fill: ${props => props.theme.palette.button.fg.dark};
        transition: all 250ms;
    }

    .arcs path:nth-child(1) {
        fill: none;
        stroke-width: 8;
        stroke-linecap: round;
        stroke: ${props => props.theme.palette.button.fg.dark};
        transition: all 250ms;
    }

    .arcs path:nth-child(2) {
        stroke-width: 0;
        fill: ${props => props.theme.palette.button.fg.dark};
        transition: all 250ms;
    }

    .cross {
        stroke-width: 10;
        stroke-linejoin: round;
        stroke: ${props => props.theme.palette.button.fg.dark};
        transition: all 250ms;
    }

    .cross path:nth-child(2) {
        stroke: ${props => props.theme.palette.bg.dark};
    }

    .cross-enter {
        transform: translate(-85%, -85%);
    }
    .cross-enter-active {
        transform: translate(0, 0);
    }
    .cross-exit {
        transform: translate(0, 0);
    }
    .cross-exit-active {
        transform: translate(-85%, -85%);
    }
`

interface IProps {
    size?: number
    muted?: boolean
}

export const SoundIcon: FunctionComponent<IProps> = ({
    size = 25,
    // muted = false,
}) => {
    const [muted, setMuted] = React.useState(false)
    return (
        <Svg onClick={() => setMuted(!muted)} viewBox="0 0 100 100" size={size}>
            <g className="shapes">
                <rect x="12" y="37" width="25" height="25" />
                <path d="M50 15 50 85 L15 50 Z" />
            </g>
            <g className="arcs" transform="translate(12, 0)">
                <path d="M50 15 A36 36, 0, 0 1, 50 85" />
                <path d="M50 33 A18 18, 0, 0 1, 50 67" />
            </g>
            <CSSTransition
                classNames="cross"
                in={muted}
                timeout={250}
                unmountOnExit
            >
                <g className="cross">
                    <path d="M15 15 L90 90 Z" />
                    <path transform="translate(14, 0)" d="M0 0 L100 100 Z" />
                </g>
            </CSSTransition>
        </Svg>
    )
}
