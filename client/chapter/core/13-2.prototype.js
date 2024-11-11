/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


// object literal -> function constructor -> class syntax


class Animal {

  // public class field 정적으로 쓸 수 있는 공간 변수를 받지 못한다.
  legs = 4;
  tail = true;
  #name = 'unknown'; // private field 밖에서는 접근 불가능 / 캡슐화

  constructor(name) { // 최초 1회만 실행 -> 초기화
    this.#name = name;
    this.stomach = [];
  }

  get eat(){
    return this.stomach;
  }

  set eat(food){
    this.stomach.push(food);
  }

}


class Tiger extends Animal {

  options = {
    version: '1.0.0',
    company: '8b-studio',
    ceo: '심선범'
  }

  
  constructor(name){
    super(name); // 부모의 생성자를 호출
    this.pattern = '호랑이 무늬'
  }

  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  static bark(sound){
    return sound + '🐯';
  }

}

// const a = new Animal('몽실이');

const 호랑이 = new Tiger('호돌이');




/*
1. 버튼 선택
2. 클릭 이벤트
3. 카운트
*/


// class

class Button{

  constructor(selector){
    this.button = document.querySelector(selector);
    this.count = 0;
    this.attachEvent();
  }

  static showMessage(selector){
    console.log(document.querySelector(selector).textContent)
  }

  createTag(){
    return `<div>${++this.count + 'clicked'}</div>`
  }
  
  _render(){
    document.body.insertAdjacentHTML('beforeend',this.createTag())
  }

  handleClick(){

    this._render()
    
  }
  
  attachEvent(){
    

    this.button.addEventListener('click',()=> this.handleClick())
  }

}

const button = new Button('.btn');


// const button2 = new Button('.btn2');







// const _button = document.querySelector('.btn');

// let count = 0;

// // function handleClick(){

// //   const tag = `
// //     <div>${++count + 'clicked!'}</div>
// //   `

// //   document.body.insertAdjacentHTML('beforeend',tag);
// // }

// function createTag(){
//   return `<div>${++count + 'clicked'}</div>`
// }

// function render(data){
//   document.body.insertAdjacentHTML('beforeend',data)
// }

// function handleClick(){

//   render(createTag());
  
// }


// _button.addEventListener('click',handleClick)


class User {

  #password;

  constructor(userID,userPW){
    this.userID = userID;
    this.password = this.hashPassword(userPW);

  }

  hashPassword(pw){
    return 'hashCODE' + pw + '소금챱챱'  
  }

  checkPassword(pw){
    return this.#password === this.checkPassword(pw);
  }
}

const user = new User('tiger','hellow123');

