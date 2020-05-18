import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease} />
};


/* 
const mapStateToProps = state => ({ // 현재의 state를 파라미터로 받아옴.
    number: state.counter.number,
});

const mapDispatchToProps = dispatch => ({ // store의 dispatch를 파라미터로 받아옴
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease())
    },
});

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer); 
*/

/*
export default connect(
    state => ({
      number: state.counter.number,
    }),
    dispatch =>
      bindActionCreators(
        {
          increase,
          decrease,
        },
        dispatch,
      ),
  )(CounterContainer);
*/

export default connect( // 이렇게 단축해서 쓸수도 있음.
    state => ({
      number: state.counter.number,
    }),
    {
        increase,
        decrease
    }
  )(CounterContainer);
  
/*
    현재 컴포넌트를 리덕스와 연동하려면 react-redux의 connect 함수를 사용해야 함.

    connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
      - mapStateToProps : 리덕스 스토어 안에 '상태(state)'를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수.
      - mapDispatchToProps : '액션 생성 함수'를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수.
 */


