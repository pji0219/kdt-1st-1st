// 문자 관련 기능

// let str = '우영';

// let longStr = str.repeat(10) + '우';
// console.log(longStr);

// const str2 = ' Hello, world ';
// console.log(str2.trim());

// const pi = 3.14159265358979;

// let int = parseInt(pi);
// let float = parseFloat(pi);

// console.log(int);
// console.log(float);
// console.log(typeof int, typeof float);

// 숫자 관련 기능

// 절대값
let minus = -999;

// console.log('abs:', Math.abs(minus));

// console.log('min:', Math.min(1, 2, 4, 5, -10, 33));
// console.log('max:', Math.max(1, 2, 4, 5, -10, 33));

//console.log('ceil: ', Math.ceil(3.14)); // 올림
// console.log('floor: ', Math.floor(3.14));   // 버림
// console.log('round: ', Math.round(3.6)); // 반올림
// console.log('round: ', Math.round(3.4)); // 반올림
// console.log('random: ', Math.random()); // 랜덤

// let nums = [-1.23, 13, 14.52, -33.53, 30];

// let min = Math.min(...nums);

// let max = Math.max(...nums);

// min = Math.floor(min);
// max = Math.floor(max);

// min = Math.abs(min);
// max = Math.abs(max);

// const avg = (max + min) / 2;
// console.log(avg);

// 100까지의 랜덤 수
// console.log(Math.floor(Math.random() * 100));

// 배열 관련 기능

// let numbers = [1, 2, 3, 4, 5, 6];
// 원본 배열이 변합니다!! 주의하세요!!
// 마지막에 추가 push
// numbers.push(7);
// console.log(numbers);

// 처음에 추가
// numbers.unshift(0);
// console.log(numbers);

// 마지막 요소 삭제 & 반환 pop
// console.log(numbers.pop());
// 첫 요소 삭제 & 반환 shift
// console.log(numbers.shift());

const numbers1 = [1, 2, 3, 4];
const numbers2 = [1, 2, 3, 4];

// 원본 배열이 변합니다!! 주의하세요!!
numbers1.splice(0, 2);

// console.log(numbers1);
// console.log(numbers2);

// [3, 4];
// [1, 2, 77, 4];

// for of문
// let numbers = [1, 2, 3, 4, 5, 6];
// let fruits = ['사과', '바나나', '수박', '포도', '파인애플'];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let number of numbers) {
//   console.log(number);
// }

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// forEach
let numbers = [1, 2, 3, 4, 5, 6];
// let fruits = ['사과', '바나나', '수박', '포도', '파인애플'];

// numbers.forEach((item, idx, array) => {
//   console.log(item, idx, array);
// });

// fruits.forEach((f, i, a) => {
//   console.log(f, i, a);
// });

// let sum1 = 0;
// let sum2 = 0;
// let sum3 = 0;

// for(let i = 0; i < numbers.length; i++) {
//   sum1 += numbers[i];
// }

// let nums = [];
// let sum1 = 0;
// let sum2 = 0;

// for (let i = 1; i <= 100; i++) {
//   nums.push(i);
// }

// for (let i = 0; i < nums.length; i++) {
//   sum1 += nums[i];
// }

// nums.forEach((item, idx) => {
//   console.log();
// });

// let numbers0 = [1, 2, 3, 4, 5, 6];

// let fore = numbers0.forEach((item) => {
//   return item;
// });

// let map = numbers0.map((item) => {
//   return item;
// });
// let map2 = numbers0.map((item) => item);

// console.log(fore);
// console.log(map);
// console.log(map2);

// const fruits = ['사과', '파인애플', '수박', '포도', '오렌지'];
// let obj = fruits.map((item, index) => {
//   return {
//     id: index,
//     name: item,
//   };
// });
// console.log(obj);

// let obj2 = fruits.map((item, index) => ({
//   id: index,
//   name: item,
// }));
// console.log(obj2);

// let reduce = numbers0.reduce((sum, item, index, arr) => {
//   console.log(sum, item, index, arr);
//   return sum + item;
// });

// let num = [];

// for (let i = 1; i <= 100; i++) {
//   num.push(i);
// }

// let reduce1 = num.reduce((sum, item) => {
//   return sum + item;
// });

// console.log(reduce1);

// let str = 'apple';

// [...str].forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

// let arr = numbers0.filter((item) => {
//   return item < 3
// })

// const words = [
//   'spray',
//   'limit',
//   'elite',
//   'exuberant',
//   'destruction',
//   'present',
// ];

// let arr3 = words.filter((item) => item.length >= 6);
// console.log(arr3);

// console.log(words.includes('spray'));
// console.log(words.includes('pororo'));

// 같은 과일과 다른 과일을 배열에 넣기
// let fruits1 = [
//   '사과',
//   '딸기',
//   '파인애플',
//   '수박',
//   '참외',
//   '오렌지',
//   '자두',
//   '망고',
// ];
// let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

// let same = [];
// let same2 = [];
// let diff = [];
// let diff2 = [];

// same = fruits1.filter((item) => fruits2.includes(item));
// diff = fruits1.filter((item) => !fruits2.includes(item));

// fruits1.forEach((item) => {
//   if (fruits2.includes(item)) {
//     same2.push(item);
//   }
// });

// fruits1.forEach((item) => {
//   if (!fruits2.includes(item)) {
//     diff2.push(item);
//   }
// });

// console.log(same, same2);
// console.log(diff, diff2);

// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 3, c: 4 };

// const returnObj = Object.assign(obj1, obj2);
// console.log(obj1);
// console.log(returnObj);

// const userName = {
//   id: 1,
//   name: 'tetz',
// };
// const userEmail = {
//   id: 1,
//   email: 'xenosign@naver.com',
// };

// const assignedObj = Object.assign(userName, userEmail);
// console.log(assignedObj);
// console.log(userName);
// console.log(assignedObj === userName);
// const a = { po: '뽀로로' };
// const b = { po: '뽀로로' };
// console.log(a === b);

// const user = {
//   id: 1,
//   name: 'tetz',
//   email: 'xenosign@naver.com',
// };
// const keys = Object.keys(user);
// console.log(keys);
// ["id", "name", "email"]
// const values = keys.map((key) => user[key]);
// console.log(values);

// 구조 분해 할당
const user = {
  id: 1,
  name: 'tetz',
  email: 'xenosign@naver.com',
};
const { id, name, email, address } = user;
// 기본값 설정 const { id, name, email, address = "KOREA"} = user;
// 특정 변수에 넣기 const { id, name: tetz, email, address = "KOREA"} = user;
console.log(id);
console.log(name);
console.log(email);
console.log(address);
const fruits = ['사과', '딸기', '망고', '수박'];
const [a, b, c, d] = fruits;
