let boxEl = document.querySelector('.box');

console.log(boxEl);

// addEventListener: 이벤트, 명령
boxEl.addEventListener('click', function () {
  if (boxEl.classList.contains('orange')) {
    boxEl.classList.remove('orange');
    boxEl.classList.add('skyblue');
  } else {
    boxEl.classList.add('orange');
  }
});
