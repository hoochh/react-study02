// async / await 방식
// ES2017 버전에 추가된 비동기 로직을 처리하기 위한 새로운 방식
// async 키워드를 사용시 해당 함수내에서 비동기 처리가 필요한 메서드가 있음을 알려줌
// await 키워드 사용시 해당 메서드의 비동기 처리가 완료될 때까지 로직을 실행하지 않고 기다려 줌

// 사용법
// async function 함수명() {
//    await 비동기 처리 메서드명();
// }

const axios = require('axios').default;

// 비동기 방식을 사용하지 않은 경우
// 정상적인 동작은 되지 않지만 프로그램의 흐름을 파악하기는 쉬움
function logName(userId) {
  var login = axios.get('http://localhost:8080?userId=' + userId);
  if (login.auth === 'success') {
    console.log(login.name);
  }
}

function logName(userId) {
  var login = axios.get('http://localhost:8080?userId=' + userId, function (res) {
    if (res.auth === 'success') {
      console.log(res.name);
    }
  });
  // 비동기 통신이 되어 login에 데이터가 들어가지 않은 상태로 if문이 실행되고 오류가 발생할 수 있음
  // 콜백함수를 사용하여 그 결과값에 대하여 if문에서 확인을 하고 데이터를 전송하도록 해야
  // 데이터가 제대로 전송된 후에 if문 실행될 수 있음
}

// 비동기 방식 사용한 경우(promise)
// 비동기 방식 혹은 콜백 방식에 대한 이해가 있을 경우에만 프로그램의 흐름을 파악할 수 있음
function logName(userId) {
  axios.get('http://localhost:8080?userId=' + userId).then((res) => {
    if (res.auth === 'success') {
      console.log(res.name);
    }
  });
}

// async / await를 적용한 경우
// 콜백에 대한 이해가 없이도 프로그램의 흐름을 쉽게 파악할 수 있음
async function logName(userId) {
  var login = await axios.get('http://localhost:8080?userId=' + userId);
  if (login.auth === 'success') {
    console.log(login.name);
  }
}

console.log('로그인 실행');
logName('admin');
