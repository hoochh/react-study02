import React from 'react';
import PropTypes from 'prop-types';
// 전달받은 데이터의 타입을 확인하기 위해서 prop-types 모듈을 로드
import './Food.css';
// css 파일은 js 컴포넌트 파일과 쌍으로 만들어 준다

/**
 * 음식 데이터를 출력할 컴포넌트 (App2.js에서 함수 생성 or 새로운 문서에서 만들고 import)
 * @param {*} 음식 이름
 * @returns 좋아하는 음식 이름
 */
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img className="imgSize" src={picture} alt={name} />
    </div>
  );
}

export default Food;

// propTypes : 상위 컴포넌트로부터 전달받은 데이터가 하위 컴포넌트에서
// 원하는 타입의 데이터인지 확인함
// isRequired : 필수 속성으로 설정, 해당 데이터가 없을 경우 오류 발생
// 오류 메시지는 발생하지만 화면에 출력은 됨..
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};
