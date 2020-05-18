import { combineReducers } from 'redux';
import counter from './counter'; // 액션, 액션 생성 함수, counter의 리듀서를 가지고 있음.
import todos from './todos';  // 액션, 액션 생성 함수, todos의 리듀서를 가지고 있음.

const rootReducer = combineReducers({
   counter,
   todos 
});

export default rootReducer;

