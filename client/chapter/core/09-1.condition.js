/* ---------------- */
/* Condition        */
/* ---------------- */

// const result = prompt("자바스크립트의 '공식'이름은 무엇일까요?");

// if (result === 'ECMAScript') {
//   console.log('정답입니다!');
// } else {
//   console.log('그것도 몰라?');
// }

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No1

// const result = prompt('숫자 입력해주세요', 0);

// if(typeof result !== 'number'){
//   console.log('에러!');
// }


// if(result > 0) {
//   console.log(1);
// } else if(result < 0) {
//   console.log(-1);
// } else if (result == 0) {
//   console.log(0);
// };


// let a = 1;
// let b = 2;
 
// let result = (a + b < 4) ? '미만' : '이상';

// console.log(result);

let login = prompt();
let message = (login == '직원') ? '안녕하세요.' :
              (login == '임원') ? '환영합니다.' :
              (login == '') ? '로그인이 필요합니다.' :
              '';

console.log(message);
              
// if (login == '직원') {
//   message = '안녕하세요.';
// } else if (login == '임원') {
//   message = '환영합니다.';
// } else if (login == '') {
//   message = '로그인이 필요합니다.';
// } else {
//   message = '';
// }



// 영화 봤니?
// let didWatchMovie;

// 영화 볼거니?
let goingToWatchMovie;

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
