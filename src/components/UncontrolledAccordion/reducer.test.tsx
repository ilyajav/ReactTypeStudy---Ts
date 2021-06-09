import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('Collapsed should be true', ()=>{

    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)
})

test('Collapsed should throw error because action type is incorrect', ()=>{

    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(() =>{
        reducer(state, {type: 'FAKE'})
    }).toThrowError();
})