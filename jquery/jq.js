// const spanEl = document.querySelector('span');
// spanEl.remove();

// 값 가져오기
// function showValue() {
//   console.log($('input').val());
// }

// 값 집어넣기
// function showValue() {
//   $('input').val('가나다라마바사');
// }

// 텍스트 설정
// $('span').text('가나다라마바사');

// jquery version
// function onChange() {
//   $('input').val('가나다라마바사');
// }

// function outPut() {
//   const val = $('input').val();
//   $('span').text(val);
// }

// $('.write-btn').on('click', () => {
//   const val = $('input').val();
//   $('span').text(val);
// });

// $('.change-btn').on('click', () => {
//   $('input').val('가나다라마바사');
// });

// $('.text-input').on('click', () => {
//   $('.text-input').attr('type', 'button');
// });

// 자바스크립트
// const btn1 = document.querySelector('.modify-btn1');
// const btn2 = document.querySelector('.modify-btn2');

// btn1.addEventListener('click', () => {
//   document
//     .querySelector('.text-input')
//     .setAttribute('placeholder', '변경1을 누르셨습니다.');
// });

// 제이쿼리
// btn2.addEventListener('click', () => {
//   document.querySelector('.text-input').setAttribute('type', 'radio');
// });

// $('.modify-btn1').on('click', () => {
//   $('.text-input').attr('placehoder', '변경1을 누르셨습니다.');
// });

// $('.modify-btn2').on('click', () => {
//   $('.text-input').attr('type', 'radio');
// });

// $('div').css('background-color', 'orange');

// const background = document.querySelector('div');
// background.style = 'background-color: skyblue';

// const orange = document.querySelector('div');
// const btn1 = document.querySelector('.btn1');

// btn1.addEventListener('click', () => {
//   orange.style = 'background-color: orange';
// });

// $('.btn2').on('click', () => {
//   $('div').css('background-color', 'blue');
// });

// $('p').html('<h1>루피</h1>');

// document.querySelector('p').innerHTML = '<h1>루피</h1>';

// const li = document.createElement('li');
// li.textContent = '추가용';

// const li2 = document.createElement('li');
// li2.textContent = '추가용';

// $('.me').before(li);
// $('.me').after(li2);

// const btn = document.querySelector('button');
// const ul = document.querySelector('ul');
// const input = document.querySelector('input');

// btn.addEventListener('click', () => {
//   const addLi = document.createElement('li');
//   addLi.textContent = input.value;

//   ul.append(addLi);
//   input.value = '';
// });

// 자식 요소만 가져옴
const children = document.querySelector('div').children;

// 모든것을 다가져옴 (요소뿐만아니라 텍스트 주석등등)
const childNode = document.querySelector('div').childNodes;

console.log(children);
console.log(childNode);
