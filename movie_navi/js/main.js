const snbMenu = document.querySelector('.sub_menu');
const snbBtn = document.querySelector('.btn_menu');

snbBtn.addEventListener('click', () => {
  if (snbMenu.classList.contains('hide')) {
    snbMenu.classList.remove('hide');
  } else {
    snbMenu.classList.add('hide');
  }
});
