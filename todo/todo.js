const inputTask = document.querySelector('.input-task');
const addBtn = document.querySelector('.input-btn');
const todoList = document.querySelector('.todo-list');

console.log(inputTask);
console.log(addBtn);
console.log(todoList);

addBtn.addEventListener('click', () => {
  if (inputTask.value === '') {
    inputTask.setAttribute('placeholder', '할 일을 입력해주세요.');
  } else {
    const addLi = document.createElement('li');

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('click', () => {
      if (checkBox.checked === true) {
        checkBox.parentNode.style.textDecoration = 'line-through';
      } else {
        checkBox.parentNode.style.textDecoration = 'none';
      }
    });

    const deleteBtn = document.createElement('input');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('value', '삭제');
    // 삭제 1방법
    // deleteBtn.setAttribute('onclick', 'deleteTask(this)');

    // 자식 요소로 추가
    addLi.append(checkBox);
    addLi.append(inputTask.value);
    addLi.append(deleteBtn);

    todoList.append(addLi);
    inputTask.value = '';
  }
});

// 삭제 2방법
todoList.addEventListener('click', (e) => {
  console.log(e.target.tagName);
  if (
    e.target.tagName === 'INPUT' &&
    e.target.getAttribute('type') === 'button'
  ) {
    e.target.parentNode.remove();
  }
});

// 삭제 1방법
// function deleteTask(t) {
//   t.parentNode.remove();
// }
