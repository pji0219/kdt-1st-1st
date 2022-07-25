import myData from './myData.json' assert { type: 'json' };
console.log(myData);

// 데이터 값 비교하려면 문자열로 바꿔서 비교
const user = {
  id: 1,
  name: 'tetz',
  email: ['xenosign@naver.com', 'tetz@spreatics.com'],
};
const user2 = {
  id: 1,
  name: 'tetz',
  email: ['xenosign@naver.com', 'tetz@spreatics.com'],
};
let userStr = JSON.stringify(user);
let user2Str = JSON.stringify(user2);
console.log(userStr === user2Str);
