import { Reducer, AnyAction } from "redux"

type ReducerMap<S extends any, A extends AnyAction> = {
    [P in A["type"]]?: A extends { type: P }
        ? (state: S, payload: A["payload"]) => S
        : never
}

export const createReducer = <S extends any, A extends AnyAction>(
    initialState: S,
    reducerMap: ReducerMap<S, A>
): Reducer<S, A> => (state = initialState, { type, payload }) =>
    reducerMap[type] ? reducerMap[type](state, payload) : state
