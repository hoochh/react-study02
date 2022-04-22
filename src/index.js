import React from 'react';
import ReactDOM from 'react-dom/client';

// export default이면 중괄호 없이, default가 아니면 {}로 감싸서..
// 리액트 라우터 돔에서 사용하는 BrowserRouter 임포트
import { BrowserRouter } from 'react-router-dom';

// import App from './App';
// import App2 from './App2';
// import App3 from './App3';
// import App4 from './App4';
// import App5 from './App5';
// import App6 from './App6';
// import App7 from './App7';
import App8 from './App8';
import reportWebVitals from './reportWebVitals';

import './index.css';

// 형식 1
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App8 />
  </BrowserRouter>,
);

// 형식 2 둘 중 하나로..
// ReactDOM.render(
//   <BrowserRouter>
//     <App8 />
//   </BrowserRouter>,
//   document.getElementById('root'),
// );

// 라우터 사용하지 않는 형식
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <App2 /> */}
//     {/* <App3 /> */}
//     {/* <App4 /> */}
//     {/* <App5 /> */}
//     {/* <App6 /> */}
//     {/* <App7 /> */}
//     <App8 />
//   </React.StrictMode>,
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
