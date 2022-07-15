const boxEl = document.querySelectorAll('.box');

boxEl.forEach((boxEl, idx) => {
  boxEl.classList.add(`order-${idx + 1}`);
  console.log(boxEl, idx);
});
