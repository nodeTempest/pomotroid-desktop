export interface IReducerMap<S> {
    [key: string]: (state: S, payload: any) => S
}

export interface IAnyAction {
    type: string
    payload: any
}

export const createReducer = <S>(
    initialState: S,
    reducerMap: IReducerMap<S>
) => (state: S = initialState, { type, payload }: IAnyAction) =>
    reducerMap[type] ? reducerMap[type](state, payload) : state
