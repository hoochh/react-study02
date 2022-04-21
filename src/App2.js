import React from 'react';
import './App.css';
import Food from './Food';

/**
 * 음식 데이터를 출력할 컴포넌트 (App2.js에서 함수 생성 or 새로운 문서에서 만들고 import)
 * @param {*} 음식 이름
 * @returns 좋아하는 음식 이름
 */
// function Food({ fav }) {
//   return <h1>I like {fav}</h1>;
// }

// 서버에서 전송된 데이터
// 내부의 배열 요소를 구분할 수 있는 key 값이 필요(id를 추가할 것)
const foodLike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
    rating: 5.0,
  },
  {
    id: 2,
    name: 'ramen',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/ec/Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'samgiopsal',
    image:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg',
    rating: 3.9,
  },
  {
    id: 4,
    name: 'chukumi',
    image:
      'https://recipe1.ezmember.co.kr/cache/recipe/2019/03/05/52d2be99c015378a75c9db81362422c71.jpg',
    rating: 4.3,
  },
  {
    id: 5,
    name: 'jokbal',
    image: 'http://image.auction.co.kr/itemimage/23/f5/9d/23f59d9426.jpg',
    rating: 3.0,
  },
];

// forEach
// map : callback 함수를 실행한 결과를 가지고 새로운 배열을 생성하는 배열함수
// reduce : 배열을 객체형으로 변경

function App2() {
  return (
    <div>
      <h1>app.js를 app2.js로 대체해서 실습</h1>
      <hr />
      <h3>내가 좋아하는 음식</h3>
      {/* <Food fav="kimchi" />
      <Food name="ramen" />
      <Food name="samgiopsal" />
      <Food name="chukumi" /> */}

      {/* map() 함수 : foodLike의 배열의 요소 하나를 dish라는 매개변수로 가져오고, dish의 key 값인 name으로
      dish.name의 값을 가져옴 */}
      {foodLike.map((dish) => (
        // 임포트한 Food.js의 Food 함수의 name 매개변수에 가져온 변수 dish.name을 대입하여 실행
        // key 값을 추가로 선언하여야 오류 메시지가 발생하지 않음
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App2;
