// 함수
function helloKdt() {
  alert('hello, kdt world!');
}

// helloKdt();

function returnFunc() {
  return 123;
}

let num = returnFunc();

// console.log(num);
// console.log(returnFunc());

// 기명 함수
function hello() {
  console.log('hello~');
}

// hello();

// 익명 함수
let world = function () {
  console.log('world!');
};

// world();

// Object 데이터
const tetz = {
  // 데이터 파트
  name: '이효석',
  age: '??',
  isMarried: false,
  hoby: ['Bicycle', 'LOL', 'Drink', 'Travel'],

  // 메소드(Method) 파트
  getName: function () {
    return this.name;
  },
  doesHeMarried: function () {
    return this.isMarried;
  },
};
let hisName = tetz.getName();
// console.log(hisName);
// console.log(tetz.doesHeMarried());

let pji = {
  name: '박종익',
  age: '34',
  isOld: true,
  isMarried: false,
  hoby: ['영화 보기', '게임'],
  girlFriend: undefined,
  money: null,
  gender: '남자',
  hometown: '연천',

  getGender: function () {
    return this.gender;
  },
  getHometwon: function () {
    return this.hometown;
  },
};

// console.log(pji.getGender());
// console.log(pji.getHometwon());

function sum(a, b) {
  return a + b;
}

// let a = sum(15, 13);
// console.log(a);
// console.log(sum(10, 20));

// 두수의 곱셈
function multiplication(a, b) {
  return a * b;
}

// console.log(multiplication(10, 2));

function onClick() {
  alert('클릭 됨!');
}
