// console.log(typeof null);
// console.log(typeof '핑크퐁');
// console.log(typeof 77);
// console.log(typeof {});

// let num = 1;
// let str = '1';

// console.log(`"${typeof num}"isn't "${typeof str}" data type`);

// console.log(
//   `typeof를 ${typeof true}이나 null에 사용하면 ${typeof null}결과를 얻을 수 있습니다.`
// );

// let mathScore = prompt('수학 점수를 입력해 주세요.');
// let englishScore = prompt('영어 점수를 입력해 주세요.');

// prompt로 받은 값은 문자로 저장됨 그래서 형변환을 해줘야 됨
// mathScore = Number(mathScore);
// englishScore = Number(englishScore);

// let avgScore = (mathScore + englishScore) / 2;
// console.log(avgScore);

// let mathScore2 = '77';
// let englishScore2 = '88';

// mathScore2 = Number(mathScore2);
// englishScore2 = Number(englishScore2);

// let avgScore2 = (mathScore2 + englishScore2) / 2;
// console.log(avgScore2);

// let nameArr = ['강유림', '강지훈', '강한솔', '김윤비'];

// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}번째 이름은 ${nameArr[i]}입니다.`);
// }

// 제곰
// let sq = 2 ** 2;
// console.log(sq);

// 루트
// let num = Math.sqrt(sq);
// console.log(num);

// let num = 10;

// num = num + 5;
// console.log(num);

// num += 5;
// console.log(num);

// num = 6;
// num++;
// console.log(num);

// let result1, result2;
// let num = 10;
// let num2 = 10;

// result1 = num++;
// console.log(result1);

// result2 = ++num2;
// console.log(result2)

// let num = 10;
// num++;
// console.log(num);

// num--;
// console.log(num);

// let a = 1;
// let b = '1';

// console.log(a == b);

// let a1 = 1;
// let b1 = '1';

// console.log(a1 === b1);

// let name = '뽀로로';
// let age = 16;
// let isAdult = age > 19;

// if (!isAdult) {
//   console.log('통과!');
// } else {
//   console.log('돌아가!');
// }

// 여성이고, 이름이 Jane 이거나 성인이면 통과
// 잘못된 예
// let gender = "M";
// let name = "Tom";
// let isAdult = true;
// if(gender === "F" && name === "Jane" || isAdult === true) {
// console.log("통과");
// } else {
// console.log("돌아가");
// }

// 올바른 예
// let gender = "M";
// let name = "Tom";
// let isAdult = true;
// if(gender === "F" && (name === "Jane" || isAdult === true) ) {
// console.log("통과");
// } else {
// console.log("돌아가");
// }

// let isAdult = true;
// let isVip = true;
// let isDruken = true;
// let isMoney = true;

// if (((isAdult === true || isVip === true) && !isDruken) || isMoney) {
//   console.log('통과');
// } else {
//   console.log('돌아가!');
// }

// let num = 10000;

// for (let i = 0; i <= num; i += 13) {
//   i % 2 != 0 ? console.log(i) : i;
// }

// let num1 = prompt('숫자 입력');
// num1 = Number(num1);

// for (let i = 0; i <= num1; i += 13) {
//   i % 2 != 0 ? console.log(i) : null;
// }

// let i = 2,
//   j = 1;

// while (i < 10) {
//   while (j < 10) {
//     console.log(`${i} x ${j} ${i * j}`);
//     j++;
//   }
//   i++;
//   j = 1;
// }

// do - while 문
// let i = 10;
// do {
//   console.log(`do-while 문에서 ${i} 번째 반복
// 문을 시작합니다!`);
//   i++;
// } while (i < 10);

// while 문
// j = 10;
// while (j < 10) {
//   console.log(`while 문에서 ${j} 번째 반복문을
// 시작합니다!`);
//   j++;
// }

// for (let i = 0; i < 100; i++) {
//   if (i == 10) {
//     console.log('멈춰!');
//     break;
//   }
//   console.log(i);
// }

// let sum = 0;
// for (let i = 0; i < 100; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   sum += i;
// }
// console.log(sum);

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 != 0) {
//     continue;
//   }
//   sum += i;
// }

// console.log(sum);

// function sayHello(인사말, name) {
//   console.log(`${인사말} ${name}`);
// }

// sayHello('안녕', '박종익');

// function square(number, 제곱근) {
//   return number ** 제곱근;
// }

// console.log(square(2, 3));

// function sayHello(name = 'my friend!') {
//   console.log(`Hello, ${name}`);
// }

// sayHello();

// 삼각형
// function trianle(a, b) {
//   return (a * b) / 2;
// }

// console.log(trianle(4, 5));

// 원의 넓이
// function getCircleArea(r) {
//   return 3.14 * r ** 2;
// }

// console.log(getCircleArea(3));

// 피타고라스의 정리
// function pita(a, b) {
//   return Math.sqrt(a ** 2 + b ** 2);
// }

// console.log(pita(3, 4));

// sayHello();
// heyHello();

// function sayHello() {
//   console.log('say Hello');
// }

// const heyHello = function () {
//   console.log('hey Hello');
// };

// let add = (a, b) => {
//   return a + b;
// };

// console.log(add(1, 2));

// 삼각형
// function trianle(a, b) {
//   return (a * b) / 2;
// }

// console.log(trianle(4, 5));

// 원의 넓이
// function getCircleArea(r) {
//   return 3.14 * r ** 2;
// }

// console.log(getCircleArea(3));

// 피타고라스의 정리
// function pita(a, b) {
//   return Math.sqrt(a ** 2 + b ** 2);
// }

// console.log(pita(3, 4));

// const trianle = function (a, b) {
//   return (a * b) / 2;
// };

// console.log(trianle(4, 5));

// const getCircleArea = (r) => {
//   return 3.14 * r ** 2;
// };

// console.log(getCircleArea(3));

// const pita = function (a, b) {
//   return Math.sqrt(a ** 2 + b ** 2);
// };

// console.log(pita(3, 4));

// const pita2 = (a, b) => {
//   return Math.sqrt(a ** 2 + b ** 2);
// };

// console.log(pita2(3, 4));

// let kdt = [
//   '임다영',
//   '천해성',
//   '모승환',
//   '유진형',
//   '이민정',
//   '장의진',
//   '강지훈',
//   '강한솔',
//   '장세영',
//   '김윤비',
//   '강유림',
//   '정승수',
//   '문영은',
//   '박수지',
//   '박혜영',
//   '허원',
//   '이소민',
//   '이지현',
//   '복준우',
//   '박종익',
// ];

// for (let i = 0; i < kdt.length; i++) {
//   console.log(`${i + 1}번째 수강생은 ${kdt[i]}입니다.`);
// }

// .split: 문자를 인수를 기준으로 쪼개서 배열로 반환
// .reverse: 배열의 순서를 뒤집어서 반환
// .join: 배열을 인수 기준으로 병합해서 문자열을 반환
// let hello = 'Hello';

// let helloArr = hello.split('');
// console.log(helloArr);

// const reverseArr = helloArr.reverse();
// console.log(reverseArr);

// const joinArr = reverseArr.join();
// console.log(joinArr);

// 메소드 체이닝
// const str = hello.split('').reverse().join();
// console.log(str);

const superMan = {
  name: 'clark',
  age: 33,
  height: 187,
  weight: 77,
  fly() {
    console.log('날아갑니데이');
  },
  run() {
    console.log('달려갑니데이');
  },
};

superMan.fly();
superMan.run();

// 접근
// console.log(superMan.name);
// console.log(superMan['age']);

// superMan.hairColor = 'brown';
// superMan.job = '기자';

// console.log(superMan.hairColor);

// delete superMan.hairColor;

// console.log(superMan.hairColor);

// console.log('home' in superMan);

// for (key in superMan) {
//   console.log(superMan[key]);
// }

const pororo = {
  name: '뽀로로',
  age: 7,
  cute() {
    console.log('뽀로로는 귀엽습니다.');
  },
};

pororo.cute();

// console.log(pororo.name);
// console.log(pororo.age);

// pororo.gender = '남자';
// console.log(pororo.gender);

// pororo.height = 160;
// console.log(pororo.height);

// console.log('name' in pororo);
// console.log('height' in pororo);

// for (key in pororo) {
//   console.log(pororo[key]);
// }
