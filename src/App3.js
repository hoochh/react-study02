import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import './App.css';

// class형 컴포넌트 사용하기
// class 키워드를 사용하여 js 클래스를 생성하고, extends를 사용하여 React.Component를
// 상속받아 class형 컴포넌트를 생성함
// 사용법
// class 클래스명 extends React.Component 로 선언

// 리액트의 컴포넌트는 함수형 컴포넌트, 클래스형 컴포넌트 두 가지가 존재함
// render() : 클래스형 컴포넌트에서 컴포넌트의 화면을 구성하기 위한 함수
// state : props와 유사한 기능. 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 가지고 있는 객체
// props와의 차이점 : props의 경우 상위 컴포넌트에서 하위 컴포넌트로 데이터가 전달되지만,
// state는 해당 컴포넌트 내에서 관리됨(멤버변수 같은 역할......)
// 편의성을 위해 두 가지를 분리

// setState() : state 객체가 가지고 있는 데이터를 수정하는 함수
// 사용법
// setState(요소명 및 연산식)
// 데이터는 오브젝트형으로 받는다
class App3 extends React.Component {
  state = {
    count: 0,
  };

  // setState()는 비동기로 동작함 > 원하는 순간 데이터의 변경을 보장하지 못함
  // 함수형태로 실행 > setState()의 매개변수로 함수를 넘기면 정상적으로 사용할 수 있음
  add = () => {
    //원래 함수
    //this.setState({ count: this.state.count + 1 });

    //변경된 방법
    //setState()의 매개변수로 함수를 넘겨줌
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };

  // 위 함수와 동일
  //   add = function () {
  //     this.setState({ count: this.state.count + 1 });
  //   };

  minus = () => {
    console.log('minus');
    //if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
    //setState()의 매개변수로 함수를 넘겨줌
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>클래스형 컴포넌트 사용하기</h1>
        <h2>state가 가지고 있는 count의 값 : {this.state.count}</h2>
        <button onClick={this.add}> + </button>
        <button onClick={this.minus}> - </button>
      </div>
    );
  }
}

export default App3;
