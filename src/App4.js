import React from 'react';
import './App.css';

// 문제 1) class형 컴포넌트 App4를 생성하고, 화면에 현재 채널, 볼륨을 표시하고,
// 볼륨 up/down, 채널 up/down 버튼을 생성하여 버튼을 클릭시마다 현재 채널 및 볼륨의
// 크기가 변경되는 프로그램을 작성하세요
// ps1) 볼륨은 0~15, 0 이하로 내려갈 수 없음 15 이상 올라갈 수 없음
// ps2) 채널은 1~15, 1 이하고 내려가면 최대값은 15가 출력, 15 이상 올라가면 1이 출력
// ps3) 각각볼륨 및 채널은 1씩 변경될 수 있음

class App4 extends React.Component {
  //{}는 오브젝트형
  state = { ch: 1, vol: 0, volIcon: '' };

  chUp = () => {
    if (this.state.ch < 15) {
      this.setState({ ch: this.state.ch + 1 });
    } else if ((this.state.ch = 15)) {
      this.setState({ ch: (this.state.ch = 1) });
    }
  };

  chDn = () => {
    if (this.state.ch > 1) {
      this.setState({ ch: this.state.ch - 1 });
    } else if ((this.state.ch = 1)) {
      this.setState({ ch: 15 });
    }
  };

  volUp = () => {
    if (this.state.vol < 15) {
      this.setState({ vol: this.state.vol + 1 });
      this.setState({ volIcon: (this.state.volIcon += '■') });
    }
  };

  volDn = () => {
    if (this.state.vol > 0) {
      this.setState({ vol: this.state.vol - 1 });
      this.setState({ volIcon: this.state.volIcon.slice(0, -1) });
    }
  };

  render() {
    return (
      <div>
        <h1>채널, 볼륨 조절하기</h1>

        <h3>Ch : {this.state.ch}</h3>

        <h3>
          Vol : {this.state.vol}
          <br />♬{this.state.volIcon}
        </h3>

        <button onClick={this.chUp}> Ch + </button>
        <button onClick={this.chDn}> Ch - </button>
        <br />
        <button onClick={this.volUp}> Vol + </button>
        <button onClick={this.volDn}> Vol - </button>
      </div>
    );
  }
}

export default App4;
