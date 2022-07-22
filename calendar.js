const calendar = document.querySelector('table');
const date = document.querySelector('#date');

// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;

calendar.addEventListener('click', function (e) {
  // 클릭된 요소의 종류에 따라 각각의 기능을 수행
  if (e.target.tagName === 'P') {
    // 날짜(P 태그)가 클릭이 되면 부모 요소를 전역 변수에 저장하여 위치 전달
    date.value = e.target.textContent;
    targetEl = e.target.parentNode;
  } else {
    // 테이블 TD가 클릭 되면 TD를 전역 변수에 저장하여 위치 전달
    date.value = e.target.firstChild.textContent;
    targetEl = e.target;
  }
});

// 작성 버튼이 클릭 되면 실행되는 함수
function writeSchedule() {
  // 클릭한 요소에 정상적으로 추가 되는지 확인하기 위한 테스트 코드
  targetEl.append('1234');
}
