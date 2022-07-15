// const pororo = {
//   name: '뽀로로',
//   age: 3,
//   height: 160,
//   gender: 'none',
// };

// for (let key in pororo) {
//   console.log(key, pororo[key]);
// }

// function sayHello() {
//   console.log(`Hello, I'm ${this.name}`);
// }

// let boy = {
//   name: 'Justin',
//   sayHello,
// };

// let girl = {
//   name: 'Anna',
//   sayHello,
// };

// boy.sayHello();
// girl.sayHello();

// function showHeight() {
//   console.log(this.height);
// }
// function showName() {
//   console.log(this.name);
// }

// const pororo = {
//   name: '뽀로로',
//   height: 160,
//   showName,
//   showHeight,
// };

// const loopy = {
//   name: 'loopy',
//   height: 170,
//   showName,
//   showHeight,
// };

// pororo.showName();
// pororo.showHeight();
// loopy.showName();
// loopy.showHeight();

// function Fruit(name, price) {
//   this.name = name;
//   this.price = price;
//   this.showPrice = function () {
//     console.log(`${this.name}의 가격은 ${this.price} 입니다.`);
//   };
// }

// const orange = new Fruit('오렌지', 3000);
// const dragonFruit = new Fruit('용과', 2500);
// const pineApple = new Fruit('파인애플', 5000);

// orange.showPrice();
// dragonFruit.showPrice();
// pineApple.showPrice();

function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.display = function () {
    console.log(`이름은 ${this.name}이고 성별은 ${this.gender} 입니다.`);
  };
}

const me = new Kdt('박종익', '남자');
const dayoung = new Kdt('임다영', '여자');
const junwoo = new Kdt('복준우', '남자');
const suji = new Kdt('박수지', '여자');

me.display();
dayoung.display();
junwoo.display();
suji.display();
