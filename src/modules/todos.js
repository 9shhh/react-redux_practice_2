/*
    1. 액션 타입 정의
 */

import { createAction, handleAction } from "redux-actions";

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // input 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크 or 체크 해제 함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

/*
    2. 액션 생성 함수 만들기
 */

// export const changeInput = (input) => ({
//     type: CHANGE_INPUT,
//     input,
// });

// let id = 3; // insert가 호출될 때마다 1씩 더해짐.
// export const insert = (text) => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false,
//     },
// });

// export const toggle = (id) => ({
//     type: TOGGLE,
//     id,
// });

// export const remove = (id) => ({
//     type: REMOVE,
//     id,
// });

/* 
   createAction으로 액션을 만들면 액션에 필요한 추가 데이터는 payload라는 이름을 사용, 추가로 payload의 값을 변형을 주어서 넣고 싶다면 
   createAction의 두번째 파라미터로 payload를 정의하는 함수를 따로 선언해서 넣어 주면됨. 
*/

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; // insert가 호출될 때마다 1씩 더해짐.
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false,
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

/*
    3. 초기 상태 및 리듀서 함수 만들기
    
    객체의 한 개 이상의 값이 들어가므로 불변성을 유지해 주어야 함.(spread 연산자 활용)
*/

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id:2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ],
};

// function todos(state = initialState, action) {
//     switch(action.type) {
//         case CHANGE_INPUT: 
//             return {
//                 ...state,
//                 input: action.input
//             };
//         case INSERT: 
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             };
//         case TOGGLE: 
//             return {
//                 ...state,
//                 todos: state.todos.map(todo => todo.id === action.id ? { ... todo, done: !todo.done } : todo)
//             };
//         case REMOVE: 
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.id)
//             };
            
//         default:
//             return state;
//     }
// }

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
        [INSERT]: (state, { payload: todo}) => ({ ...state, todos: state.todos.concat(todo)}),
        [TOGGLE]: (state, { payload: id }) => ({ ...state, todos: state.todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo)}),
        [REMOVE]: (state, { payload: id} ) => ({ ...state, todos: state.todos.filter(todo => todo.id !== actiod)}),
    },
    initialState
);

export default todos;

/*
    concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 '합쳐서 새 배열'을 반환
    - 기존배열을 변경하지 않음
    - 추가된 새로운 배열을 반환

    map() 메서드는 배열 내의 모든 요소 각각에 대하여 '주어진 함수를 호출한 결과'를 모아 새로운 배열을 반환

    filter() 메서드는 주어진 함수의 '테스트를 통과하는 모든 요소'를 모아 새로운 배열로 반환

 */