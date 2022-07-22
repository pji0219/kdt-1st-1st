// 짝수 홀수
function solution(num) {
  let answer = '';

  num % 2 === 0 ? (answer = 'even') : (answer = 'odd');

  return answer;
}

console.log(solution(10));
