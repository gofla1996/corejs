/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// enumerable


// 클래스 기반 언어 : 클래스를 정의하고 그 클래스로 객체를 생성 => 이거보다 주로 파스칼 방식을 사용함 
const animal = {
  legs:4,
  tail:true,
  stomach:[],
  get eat(){  // getter
    return this.stomach
  },
  set eat(food){  // setter
    this.stomach.push(food)
  }
}


const tiger = {
  pattern: '호랑이 무늬',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__: animal
}



const 백두산호랑이 = {
  name:'백돌이',
  color:'white',
  __proto__: tiger
}


const 한라산호랑이 = {
  name:'한돌이',
  color:'orange',
  __proto__: tiger
}







/* object constructor function */
// 생성자 함수 

// 파스칼 방식 : 첫글자 대문자
function Animal() {
  this.legs = 4;
  this.tail = true;
  this.getEat = function(){
    return this.stomach ?? []
  }
  this.setEat = function(food){
    this.stomach = [];
    this.stomach.push(food);
  }
}
// const a = new Animal();

function Tiger(name){
  Animal.call(this);
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }
};

// Tiger.prototype = a;

// instance method
const 금강산호랑이 = new Tiger('금순이');

// static method
Tiger.bark = function (sound){
  return sound;
}

/* fucntion instance method */

// call -> 함수를 대신 실행시켜줌 -> 빌려쓰기
// apply -> 함수를 대신 실행시켜줌 -> 빌려쓰기

// bind -> 함수를 대신 실행 X -> 빌려쓰기

// this를 강제하기 위해


function sum(a,b){
  console.log(this);
  return a + b;
}

// Object.prototype.hasOwnProperty.call(obj,key)

// sum.call('안녕!',10,20) // 함수를 대신 실행시켜줌. this를 '안녕!'으로 바꿔서 실행 가능. 인수를 하나하나 이름으로 리터럴로 받는다.

// sum.apply('안녕!',[10,20]) // 함수를 대신 실행시켜줌. this를 '안녕!'으로 바꿔서 실행 가능. 인수를 배열로 감싸 전달한다는 점에서 call과 차이가 있음


// bind는 함수를 실행시키지 않고 this를 바꿔준다.
const _sum = sum.bind('안녕!', 10,20)

console.log(_sum());

function handleClick(){
  console.log('clicked!');
}

const handleBindClick = handleClick.bind('hello');

// document.querySelector('.first').addEventListener('click', handleClick.bind());
document.querySelector('.first').addEventListener('click', handleBindClick);