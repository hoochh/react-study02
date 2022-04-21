import React from 'react';

// jsx 문법에서는 html 태그를 사용 시 반드시 시작태그와 끝태그가 존재해야함(xml에서는 시작,끝태그가 반드시 존재)
// <img> -> <img></img> / <img />
// props에 데이터가 전달되어 const형의 {name, gender, email} 변수가 생성됨 >> {key}로 사용 가능
// props.name / props.gender / props.email 로
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
