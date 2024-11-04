/* ------------ */
/* For Loop     */
/* ------------ */



// 2 ~ 10까지의 짝수 출력하기


// while continue


let j = 0;
while( j <= 10 ) {
  j++

  if( j % 2 === 0 ) continue;

  console.log(j);
}

for( let p = 0; p <= 10; p++ ){

  if(p % 2 !== 0 ) continue;
  
  console.log('p :', p);
    
}

console.clear();

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while(i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}


// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.


  // for( let k = 0; k < frontEndDev.length; k++ ) {

  //   const value = frontEndDev[k];
  //   const lower = value.toLowerCase(); 

  //   if( frontEndDev[k] === 'SVG' || frontEndDev[k] === 'jQuery' ) continue;
  //   console.log(frontEndDev[k]);
  // }





//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

// for( let m = 0; m < frontEndDev.length; m++ ) {

//     const value = frontEndDev[m];
//     const lower = value.toLowerCase(); 

//   if( lower.includes('jquery') ) break;
//   console.log(frontEndDev[m]);
// }

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)


// const arr = [...frontEndDev];

// for(let i = 0; i < l; i++) {

//   // shift() : 배열의 첫번째 요소를 제거하고 반환
//   // pop() : 배열의 마지막 요소를 제거하고 반환
//   // 하지만 이 메소드를 사용하면 배열 원본을 훼손시키므로 배열을 복사해서 사용하거나 새로운 배열을 생성해서 사용해야 한다.

//   console.log(arr.shift());
//   // console.log(arr.pop());
// }



for (let i = l, subject; subject = frontEndDev[--i];) {
  console.log(subject);
}