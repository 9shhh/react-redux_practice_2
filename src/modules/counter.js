import { createAction, handleActions } from 'redux-actions';

/* 
    1. 액션 타입 정의 
     - 액션 타입은 대문자로 정의
     - 문자열 내용은 '모듈 이름/액션 이름' 형태로 작성 -> 프로젝트가 커졌을 때 액션의 이름 충돌 방지.
*/

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/*
    2. 액션 생성 함수 만들기 (export를 사용하여 다른 파일에서 불러오게 하기)
*/

// export const increase = () => ({type : INCREASE});
// export const decrease = () => ({type : DECREASE});

// 위에 수동으로 만들었던 액션 생성 함수를 redux-actions 모듈을 사용하여 편리하게 생성
export const increase = createAction(INCREASE);
export const increase = createAction(DECREASE);

/*
    3. 초기 상태 및 리듀서 함수 만들기
*/

const initialState = {
    number: 0
};

// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE: 
//             return {
//                 number: state.number + 1
//             };
//         case DECREASE:
//             return {
//                 number: state.number -1
//             };
//         default: 
//             return state;    
//     }
// }

// redux-actions 모듈의 handleActions를 사용하여 리듀서 편리하게 생성 (첫번째 파라미터에는 각 액션에 대한 업데이트 함수, 두번째 파라미터에는 초기 상태)
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number : state.number + 1 }),
        [DECREASE]: (state, action) => ({ number : state.number - 1 }),
    },
    initialState,
);

export default counter;

/*
  추가로, export는 여러 개를 내보낼 수 있고 export default는 단 한 개만 내보낼 수 있음.
  
  불러올 때 
  import { increase, decrease } from './counter';
  
  한꺼번에 불러오고 싶을 때
  import counter, {increase, decrease} from './counter';
 */