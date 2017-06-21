import { SET_COLOR } from '../actions/ActionTypes';

const initialState = {
    color : [255,255,255]
};
export default function ui(prevState = initialState, action){
    if(action.type === SET_COLOR){
        return {
            color: action.color
        };
    }else{
        return prevState;
    }
}