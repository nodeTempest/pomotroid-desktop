import { AnyAction } from "redux"

export const createReducer = <S, A extends AnyAction>(
    initialState: S,
    reducerMap: {
        [P in A["type"]]?: A extends { type: P }
            ? (state: S, payload: A["payload"]) => S
            : never
    }
): ((state: S | undefined, action: A) => S) => (
    state = initialState,
    { type, payload }
) => (reducerMap[type] ? reducerMap[type](state, payload) : state)
