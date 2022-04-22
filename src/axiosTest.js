// Axios란?
// 자바스크립트로 비동기 통신을 할 수 있도록 해주는 모듈
// 자바스크립트에는 기본적으로 비동기 통신을 위한 XHR(XML Http Request)이 존재함
// XHR을 사용하여 ajax 통신을 하는데 사용함(사용법이 어려움)
// jquery를 사용시 ajax 통신을 쉽게 할 수 있음 ($.ajax $.get $.post로 통신 가능)
// 프론트엔드 개발 시 jquery의 각종 문제점 때문에 jquery를 사용하지 않게 되면서 비동기 통신을
// 쉽게 할 수 있는 방법이 필요함 > axios 모듈 사용
// React 및 Vue.js에서는 Axios 모듈을 사용하여 비동기 통신을 구현함

// axion는 promise 기반 설계되어 비동기방식 실행 > .then, .catch 사용

// Axios 설치
// >yarn add axios

// axios 모듈 불러오기
// import axios from 'axios';

// axios 사용법
// axios.통신방식(서버주소).then(콜백함수).catch(콜백함수);

// test할 때는 import 대신 const axios로 변수 만들어 사용
const axios = require('axios').default;

axios
  .get('https://yts-proxy.now.sh/list_movies.json')
  .then((Response) => {
    console.log(Response);
  })
  .catch((error) => {
    console.log(error);
  });
