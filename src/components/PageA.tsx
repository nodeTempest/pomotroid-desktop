import * as React from "react"
import { useDispatch, useSelector } from "react-redux"

import { startCd, stopCd, restartCd, resetCd } from "../state/countdown/actions"
import {
    durationsSelector,
    currentStageSelector,
    IDurations,
} from "../state/stages/reducer"
import { IRootState } from "../state/root-reducer"
import {
    changeStagesDuration,
    changeSatgesRounds,
    nextStage,
    stagesSetDefaults,
} from "../state/stages/actions"

const PageA = () => {
    const dispatch = useDispatch()

    const durations: IDurations = useSelector(durationsSelector)
    const rounds = useSelector((state: IRootState) => state.stages.rounds)
    const currentRound = useSelector(
        (state: IRootState) => state.stages.currentRound
    )
    const currentStage = useSelector(currentStageSelector)
    const remainingTime = useSelector(
        (state: IRootState) => state.cd.remainingTime
    )

    return (
        <>
            <h1>Page A</h1>
            <button onClick={() => dispatch(startCd())}>Start</button>
            <button onClick={() => dispatch(stopCd())}>Stop</button>
            <button
                onClick={() =>
                    dispatch(
                        restartCd({
                            duration: 10000,
                        })
                    )
                }
            >
                Restart
            </button>
            <button
                onClick={() =>
                    dispatch(
                        resetCd({
                            duration: 10000,
                        })
                    )
                }
            >
                Reset
            </button>

            <div>Work</div>
            <div>{durations.work}</div>
            <input
                type="range"
                min="1"
                max="60"
                value={durations.work}
                onChange={e =>
                    dispatch(changeStagesDuration({ work: +e.target.value }))
                }
            />

            <div>Short Break</div>
            <div>{durations.sbreak}</div>
            <input
                type="range"
                min="1"
                max="60"
                value={durations.sbreak}
                onChange={e =>
                    dispatch(changeStagesDuration({ sbreak: +e.target.value }))
                }
            />

            <div>Long Break</div>
            <div>{durations.lbreak}</div>
            <input
                type="range"
                min="1"
                max="60"
                value={durations.lbreak}
                onChange={e =>
                    dispatch(changeStagesDuration({ lbreak: +e.target.value }))
                }
            />

            <div>Rounds</div>
            <div>{rounds}</div>
            <input
                type="range"
                min="1"
                max="12"
                value={rounds}
                onChange={e => dispatch(changeSatgesRounds(+e.target.value))}
            />
            <button onClick={() => dispatch(stagesSetDefaults())}>
                Set Defaults
            </button>
            <button onClick={() => dispatch(nextStage())}>Next Stage</button>
            <br />
            <br />
            <br />
            <h1>{remainingTime}</h1>
            <h2>{currentStage}</h2>
            <div>
                Round: {currentRound}/{rounds}
            </div>
        </>
    )
}

export default PageA
