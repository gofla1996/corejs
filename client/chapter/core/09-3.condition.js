/* ---------------- */
/* Switch           */
/* ---------------- */




let a;

switch (a) {
  case 10:
    alert('10');
    break;
  case 13:
    alert('13');
    break;
  case 15:
    alert('15');
    break;
  case 20:
    alert('20');
    break;
  // default:
  //   alert('일치하는 값이 없습니다.');
}









const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */


switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;

}

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
} else {
  console.log('');
}


/* switch vs. if -------------------------------------------------------- */




console.clear();

// prompt를 통해 숫자를 입력 받는다. (0 ~ 6까지)
// 받은 숫자를 사용해서 switch case를 돌려주시면 됩니다.

// 0: 일
// 1: 월
// 2: 화
// 3: 수
// 4: 목
// 5: 금
// 6: 토

// let day = prompt('0 ~ 6까지의 숫자를 입력해주세요.', 0);

// switch (day) {
//   case '0':
//     console.log('일요일');
//     break;
//   case '1':
//     console.log('월요일');
//     break;
//   case '2':
//     console.log('화요일');
//     break;
//   case '3':
//     console.log('수요일');
//     break;
//   case '4':
//     console.log('목요일');
//     break;
//   case '5':
//     console.log('금요일');
//     break;
//   case '6':
//     console.log('토요일');
//     break;
// } 


function getRandom(n) {
  const value = Math.floor(Math.random() * n);
  return value;

}

// function getDay(){
  
//   const value = getRandom(7);

//   switch (value) {


//     case 0: console.log('일'); break;
//     case 1: console.log('월'); break;
//     case 2: console.log('화'); break;
//     case 3: console.log('수'); break;
//     case 4: console.log('목'); break;
//     case 5: console.log('금'); break;
//     case 6: console.log('토'); break;
//   }

//   return value;
// }

function getDay(){
  
  const value = getRandom(7);

  switch (value) {


    case 0: return '일'
    case 1: return '월'
    case 2: return '화'
    case 3: return '수'
    case 4: return '목'
    case 5: return '금'
    case 6: return '토'
  }
}
// getDAy() 함수를 가지고
// 주말인지 평일인지를 콘솔창에 보여주는 함수를 만들어주세요.
// weekend


function weekend(){

  const today = getDay(getRandom(7));

  // const day = getDay();

  // if(today.includes('토') || today.includes('일')){
  //   return `오늘은 ${today}요일, 주말입니다.`;
  // } else {
  //   return `오늘은 ${today}요일, 평일입니다.`;
  // }

  return (today.includes('토') || today.includes('일')) ? 
    `오늘은 ${today}요일, 주말입니다.` : 
    `오늘은 ${today}요일, 평일입니다.`;

}

const day = weekend();








