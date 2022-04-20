import React from 'react';

function Info() {
  let name = 'ddd';
  let gender = 'dd';
  let age = '00';
  let email = '0000@gmail.com';
  let addr = '부산';

  return (
    <div>
      <h1>내 정보</h1>
      <p>이름 : {name}</p>
      <p>성별 : {gender}</p>
      <p>나이 : {age}</p>
      <p>이메일 : {email}</p>
      <p>주소 : {addr}</p>
    </div>
  );
}

export { Info };
