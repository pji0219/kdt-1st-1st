const btn = document.querySelector('.btn');
const boxs = document.querySelectorAll('.box');

boxs.forEach((box, idx) => {
  box.classList.add(`box_${idx + 1}`);
});
