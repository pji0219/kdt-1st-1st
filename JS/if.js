//  if문

// let tetz = '이효';

// if (tetz == '이효석') {
//   alert('이효석');
// } else if (tetz == '이효슥') {
//   alert('이효슥');
// } else {
//   alert('모르겠어요.');
// }

// if 중첩

// let tetz = '이효석';
// let gender = 'male';

// if (gender == 'male') {
//   if (tetz == '이효석') {
//     alert('잘 찾으셨습니다.');
//   } else {
//     alert('이름이 틀렸네요.');
//   }
// } else {
//   alert('성별이 틀렸네요.');
// }

// switch

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = '일요일';
//     break;
//   case 1:
//     day = '월요일';
//     break;
//   case 2:
//     day = '화요일';
//     break;
//   case 3:
//     day = '수요일';
//     break;
//   case 4:
//     day = '목요일';
//     break;
//   case 5:
//     day = '금요일';
//     break;
//   case 6:
//     day = '토요일';
//     break;
//   default:
//     day = '모름';
// }

// console.log(day);

// 삼항 연산자

// let tez = '이효석';

// tez == '이효석' ? console.log('맞았습니다.') : console.log('틀렸습니다.');

// let day = new Date().getDay();

// if (day == 0) {
//   alert('일');
// } else if (day == 1) {
//   alert('월');
// } else if (day == 2) {
//   alert('화');
// } else if (day == 3) {
//   alert('수');
// } else if (day == 4) {
//   alert('목');
// } else if (day == 5) {
//   alert('금');
// } else if (day == 6) {
//   alert('토');
// }

// for문

// for (let i = 0; i < 100; i++) {
//   console.log(i + 1, '번째 반복중');
// }

// while문
// let i = 0;

// while (i < 10) {
//   console.log('인사를', i + 1, '번째', '드립니다.');
//   i++;
// }

// let i2 = 0;

// while (true) {
//   console.log('인사를', i2 + 1, '번째', '드립니다.');
//   i2++;

//   if (i2 == 10) {
//     break;
//   }
// }

// for (let i = 2; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(i, 'X', j, '=', i * j);
//   }
// }

// let sum2 = 0;

// for (let i = 0; i < 101; i++) {
//   i % 2 == 0 ? (sum2 += i) : sum2;
// }

// console.log(sum2);

// let sum5 = 0;

// for (let i = 0; i < 101; i++) {
//   i % 5 == 0 ? (sum5 += i) : sum5;
// }

// console.log(sum5);

let sum = 0;

for (let i = 0; i < 101; i++) {
  i % 2 == 0 || i % 5 == 0 ? (sum += i) : sum;
}

console.log(sum);
