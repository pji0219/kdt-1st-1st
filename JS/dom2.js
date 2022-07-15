const boxEl = document.querySelector('.box');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const text = document.querySelector('.text');
// const boxEl2 = document.getElementById('second_box');
// console.log(boxEl);
// console.log(boxEl2);

// boxEl.classList.add('active');

console.log(boxEl);

// 클래스 있는지 확인
// console.log(boxEl.classList.contains('active'));

// boxEl.classList.remove('active');
// console.log(boxEl.classList.contains('active'));

// boxEl.addEventListener('click', function () {
// if (boxEl.classList.contains('orange')) {
//   boxEl.classList.remove('orange');
//   boxEl.classList.add('skyblue');
// } else if (boxEl.classList.contains('skyblue')) {
//   boxEl.classList.remove('skyblue');
//   boxEl.classList.add('orange');
// } else {
//   boxEl.classList.add('orange');
// }
// });

const intEl = document.getElementById('input');

// boxEl.addEventListener('click', function () {
// 속성값 추가
//   inputEl.setAttribute('type', 'button');
// });

// boxEl.addEventListener('click', function () {
//   boxEl.textContent = 'KDT';
// });

boxEl.addEventListener('click', () => {
  if (boxEl.classList.contains('orange')) {
    boxEl.classList.remove('orange');
    boxEl.classList.add('skyblue');
  } else if (boxEl.classList.contains('skyblue')) {
    boxEl.classList.remove('skyblue');
    boxEl.classList.add('orange');
  } else {
    boxEl.classList.add('orange');
  }
});

btn1.addEventListener('click', () => {
  intEl.setAttribute('placeholder', '아이디를 입력 하세요.');
  text.textContent = '아이디를 입력하세요.';
});

btn2.addEventListener('click', () => {
  if (text.classList.contains('가나다라마바사')) {
    text.classList.remove('가나다라마바사');
    text.innerText = intEl.value;
  } else {
    text.innerText = intEl.value;
  }
});

btn2.addEventListener('click', () => {
  text.innerText = intEl.value;
});
