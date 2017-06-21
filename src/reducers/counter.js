import * as types from '../actions/ActionTypes';

// 초기상태 상수형태로 작성
const initialState = {
    number : 0
};

// es6 새로운 기능 default
// 매개변수에 default 값을 줄 수 있다.
export default function counter(prevState = initialState, action){
    /*if(prevState === 'undefined') {
        return initialState;
    }*/

    switch(action.type){
        case types.INCREMENT :
            return { ...prevState, number : prevState.number + 1 }; // es6 의 spread 사용하여 기존 객체 복사
        case types.DECREMENT :
            return { ...prevState, number : prevState.number - 1 };
        default:
            return prevState;
    }
}