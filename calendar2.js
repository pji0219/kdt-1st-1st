// 일정 추가
writeBtn.addEventListener('click', () => {
  // div 태그 생성
  const schedule = document.createElement('div');

  // 추후에 삭제 기능에서 다른 div태그는 안지우고 추가된 일정만 지우기 위해서 클래스 추가
  schedule.classList.add('schedule');

  // div태그에 input창의 값을 텍스트로 넣어줌
  const value = contentInput.value;
  schedule.textContent = value;

  // 2 //
  // schedule div가 클릭 되면 스스로를 삭제하는 eventListener 를 미리 추가한 다음 붙여 주기
  schedule.addEventListener('click', function () {
    schedule.remove();
  });

  // 클릭한 날짜에 div태그를 자식 태그로 추가
  ElPosition.append(schedule);

  // input창 비우기
  contentInput.value = '';
});

// 일정 삭제
// 1 //
// 이렇게 클래스를 바탕으로 삭제를 구현 하시면 추가 된 div 는 전부 schedule 이라는 클래스를 가지게 되므로
// 삭제를 클릭하면 전부 삭제가 되는데요.
// 이를 해결 하기 위해서는 schedule 이라는 div 를 붙일 때 클릭 시 스스로를 삭제하는 addEventListener 를 추가하셔서 append 하시면 됩니다.

// calendar.addEventListener('click', (e) => {
//   if (e.target.className === 'schedule') {
//     $('.schedule').remove();
//   }
// });
