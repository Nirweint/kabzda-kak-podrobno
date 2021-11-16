import {reducer, StateType, TOGGLE_STATE} from "./reducer";

test('reducer should be true', () => {
    // data
    const state: StateType = {
        collapsed: false
    }

    // action
    const newState = reducer(state, {type: TOGGLE_STATE})

    // expectation
    expect(newState.collapsed).toBe(true)
})

test('reducer should be false', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    const newState = reducer(state, {type: TOGGLE_STATE})

    // expectation
    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error, because incorrect type', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    expect(() => {
        reducer(state, {type: "FAKE-TYPE"})
    }).toThrowError();
})