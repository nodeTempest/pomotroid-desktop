import * as React from "react"
import { useDispatch } from "react-redux"
import { startCd, stopCd, restartCd, resetCd } from "../state/countdown/actions"

const PageA = () => {
    const dispatch = useDispatch()
    const start = () => dispatch(startCd())
    const stop = () => dispatch(stopCd())
    const restart = () =>
        dispatch(
            restartCd({
                duration: 10000,
            })
        )
    const reset = () =>
        dispatch(
            resetCd({
                duration: 10000,
            })
        )

    return (
        <>
            <h1>Page A</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={restart}>Restart</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default PageA
