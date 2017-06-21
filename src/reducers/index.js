import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';

// redux 에서 제공하는 combineReducers 를 사용해
// 여러개의 reducer를 하나로 만들어서 내보낸다.
const reducers = combineReducers({
    counter, ui
});

export default reducers;