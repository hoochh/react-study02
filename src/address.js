import React from 'react';

function Addr(props) {
  const { name, gender, email } = props;

  return (
    <div>
      <h3>친구 {name} 정보</h3>
      <p>이름 : {name}</p>
      <p>성별 : {gender}</p>
      <p>이메일 : {email}</p>
    </div>
  );
}

export default Addr;
