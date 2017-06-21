import { INCREMENT, DECREMENT, SET_COLOR } from './ActionTypes';
// = import * as types from './ActionTypes'; // types.INCREMENT

export function increment(){
    return {
        type: INCREMENT
    }
}

export function decrement(){
    return {
        type: DECREMENT
    }
}

export function setColor(color){
    return {
        type: SET_COLOR,
        color: color
    }
}