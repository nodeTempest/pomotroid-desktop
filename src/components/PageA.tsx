import * as React from "react"
import { useDispatch } from "react-redux"
import { startCd, stopCd } from "../state/countdown/actions"

const PageA = () => {
    const dispatch = useDispatch()
    const start = () => dispatch(startCd())
    const stop = () => dispatch(stopCd())

    return (
        <>
            <h1>Page A</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </>
    )
}

export default PageA
