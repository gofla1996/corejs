// named export 현재 우리가 한 것 => import { } from '..' : 중괄호 필수, 여러 개를 불러올 수 있음, 이름 지정할 수 있는 방법 있음
// default export => import ... from '..' : 중괄호 없이 사용 가능, 이름을 마음대로 지정

// import { getNode as $, getNodes } from './lib/dom/getNode.js';
// import { insertLast } from './lib/dom/insert.js';
// import clearContents from './lib/dom/clearContents.js';

import { getNode, insertLast, clearContents } from './lib/dom/index.js';

// 1. input 선택하기
// 2. input 이벤트 바인딩
// 3. input의 value 값 가져오기
// 4. 숫자 더하기 
// 5. result에 출력하기 


/* global clearContents */

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');



function handleInput(){
  const firstValue = Number(first.value);
  const secondValue = +second.value;
  const total = firstValue + secondValue 

  
  clearContents(result);
  insertLast(result,total)
  
}

first.addEventListener('input',handleInput)
second.addEventListener('input',handleInput)