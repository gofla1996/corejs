import { 
  attr,
  memo,
  getNode,
  getNodes,
  endScroll,
  insertLast,
  clearContents,
  diceAnimation,
} from './lib/index.js';

// setInterval

/* -------------------------------------------------------------------------- */
/*                 코멘트 디바이더 단축키 컨트롤 + 알트 + X                        */
/* -------------------------------------------------------------------------- */

// 주사위 굴리기 버튼을 누르면 주사위가 애니메이션이 될 수 있도록 만들어 주세요.
// 같은 버튼을 눌렀을 때 애니메이션 재생 or 정지

// const diceButton = document.querySelector('.buttonGroup button:first-child');
const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup button');
const recordListWrapper = getNode('.recordListWrapper');

// function diceRoll(){
//   clearInterval();
//   diceButton.classList.toggle('active');

//   if(diceButton.classList.contains('active')){
//     setInterval(diceAnimation,200);
//   } else if(!diceButton.classList.contains('active')){ {
//     clearInterval(diceAnimation);
//   }
//   }
// }

// [주사위 굴리기 버튼을 누르면 주사위가]
// 1. 주사위 굴리기 버튼을 선택하기
// 2. 클릭 이벤트 바인딩 


// [애니메이션이 될 수 있도록 만들어 주세요]
// 1. setInterval
// 2. diceAnimation()


// [같은 버튼 눌렀을 때 ]
// 1. 상태 변수 true | false
// 2. 조건 처리 

// [애니메이션이 재생 or 정지] 
// 1. setInterval
// 2. clearInterval ( scope )


// [기록 버튼을 누르면]
// 1. recordButton에 클릭 이벤트 바인딩 

// [table이 등장]
// 1. recordListWrapper에 hidden 속성 제어하기 (true | false)

// [table 안쪽에 tr 태그 랜더링]
// 1. 태그 만들기
// 2. insertLast 함수 사용하기 (tbody 안쪽에 랜더링)

// [table 안쪽에 tr 태그에 데이터를 넣고 랜더링]


// [Item의 갯수가 많아짐에 따라 스크롤을 제일 하단으로 올 수 있도록]
// 1. scrollTop 
// 2. scrollHeight


// [reset버튼을 눌렀을 때 모든 항목 초기화]
// hidden
// 변수 초기화 


{
  /*
  <tr>
    <td>0</td>
    <td>5</td>
    <td>5</td>
  </tr>
  */
}

let count = 0;
let total = 0;

function createRecordItem(value) {
  const template = `
  <tr>
  <td>${++count}</td>
  <td>${value}</td>
  <td>${total += value}</td>
  </tr>
  `
  
  return template;
}

function renderRecordItem() {
  
  const diceNumber = +attr(memo('cube'), 'dice');
  
  insertLast('.recordListWrapper tbody', createRecordItem(diceNumber));

  recordButton.disabled = true;

}

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;

    // setInterval(diceAnimation, 100)
  };
})();

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();
  endScroll();
}

function handleReset() {
  recordListWrapper.hidden = true;
  clearContents('.recordListWrapper tbody');
  count = 0;
  total = 0;

}


rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
