import EventEmitter from "events"

type events = "stateChange"

interface IState {
    isRunning: boolean
    ticks: number
    over: boolean
}

interface ITimeStamps {
    tickInterval: number
    duration: number
    remainingTime: number
    passedTime: number
}

export interface IOptions {
    duration?: number
    tickInterval?: number
}

export type ICdState = IState & ITimeStamps

export class Cd {
    private timer: number = 0

    private readonly emitter = new EventEmitter()

    private timeStamps: ITimeStamps = {
        tickInterval: 0,
        duration: 0,
        remainingTime: 0,
        passedTime: 0,
    }

    private readonly initialState: IState = {
        isRunning: false,
        ticks: 0,
        over: false,
    }

    private state: IState = { ...this.initialState }

    constructor(options?: IOptions) {
        this.setTimeStamps(options)
    }

    private setTimeStamps({ duration, tickInterval }: IOptions = {}) {
        duration = duration ?? Infinity
        tickInterval = tickInterval ?? 1000

        this.timeStamps = {
            duration,
            tickInterval,
            remainingTime: duration,
            passedTime: 0,
        }
    }

    private isEnd(): boolean {
        return this.timeStamps.remainingTime <= 0
    }

    private setState(state: IState) {
        this.state = state
        this.emitter.emit("stateChange", this.getState())
    }

    private setRunning(isRunning: boolean) {
        this.setState({
            ...this.state,
            isRunning,
        })
    }

    private tick() {
        this.setState({
            ...this.state,
            ticks: this.state.ticks + 1,
        })
    }

    private launchTimer() {
        this.timer = window.setInterval(() => {
            this.timeStamps.passedTime += 10
            this.timeStamps.remainingTime -= 10

            if (
                this.timeStamps.passedTime % this.timeStamps.tickInterval ===
                0
            ) {
                if (this.isEnd()) {
                    this.end()
                } else {
                    this.tick()
                }
            }
        }, 10)
    }

    private stopTimer() {
        clearInterval(this.timer)
    }

    getState(): ICdState {
        return {
            ...this.state,
            ...this.timeStamps,
        }
    }

    start() {
        if (this.state.isRunning || this.state.over) {
            return
        }
        this.setRunning(true)
        this.launchTimer()
    }

    stop() {
        if (!this.state.isRunning || this.state.over) {
            return
        }
        this.stopTimer()
        this.setRunning(false)
    }

    reset(options?: IOptions) {
        this.setTimeStamps(options)
        this.stopTimer()
        this.setState({
            ...this.initialState,
        })
    }

    restart(options?: IOptions) {
        this.setTimeStamps(options)
        this.stopTimer()
        this.launchTimer()
        this.setState({
            ...this.initialState,
            isRunning: true,
        })
    }

    end() {
        this.stopTimer()
        this.setState({
            ...this.state,
            isRunning: false,
            over: true,
            ticks: this.state.ticks + 1,
        })
    }

    on(e: events, fn: (state: ICdState) => void) {
        this.emitter.on(e, fn)
    }

    off(e: events, fn: (state: ICdState) => void) {
        this.emitter.off(e, fn)
    }
}

export default Cd
