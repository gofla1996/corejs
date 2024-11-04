/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

// condition ? value1 : value2

receivedEmailAddress = (emailAddress === undefined || emailAddress === null ) ?
'user@company.io' : emailAddress;


// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';


/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const isActive = false;

console.log( 0 || WIDTH );
console.log( 0 ?? WIDTH );

console.log( undefined || WIDTH );
console.log( undefined ?? WIDTH );

// ||는 false가 아닌 값이 반환되지만, ??는 정의된 값이 반환됩니다.
console.log( isActive || WIDTH );
console.log( isActive ?? WIDTH );

console.log( '' || WIDTH );
console.log( '' ?? WIDTH );

// a ||= b → a가 false일 때만 b의 값을 a에 할당
// a &&= b → a가 true일 때만 b의 값을 a에 할당
// a ??= b → a가 null 또는 undefined일 때만 b의 값을 a에 할당





// 온라인 쇼핑몰의 구매 기능을 구현하고 싶다...

// 1. 사용자 (user) 상태
// - 회원 / 비회원
// - 회원 => 일반 / 프리미엄

// 2. 할인 규칙
// - 모든 사용자(회원, 비회원) 첫 구매 시 5% 할인이 적용됩니다.
// - 일반 회원은 두 번째 구매부터 10% 할인을 받습니다.
// - 프리미엄 회원은 항상 20% 할인을 받습니다.
// - 비회원은 두 번째 구매부터 할인을 받을 수 없습니다.

// 3. 추가 조건
// - 구매 금액이 2만원 이상일 경우, 추가로 5% 할인이 부여됩니다.

console.clear();

function discountPrice(userState, count, price) {

  let discountRate = 0;

  if( count === 1 ) {
    discountRate += 5;
  }

  if( userState === '일반 회원' && count > 1 ) {
    discountRate += 10;
  }

  if( userState === '프리미엄 회원' ) {
    discountRate += 20;
  }

  if( price >= 20000 ) {
    discountRate += 5;
  }

  console.log(`할인율: ${discountRate}%`);

  const totalPrice = price - (price * discountRate / 100);

  console.log(`최종 금액: ${totalPrice}원`);
}

discountPrice('프리미엄 회원', 1, 23500);