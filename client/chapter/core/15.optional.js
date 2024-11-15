/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photos: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  // getFullName() {
  //   return `${this.brand}, ${this.maker}`;
  // },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// portableFan && portableFan.photos && portableFan.photos.animate

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

portableFan.photos?.animate


// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

const fullName = portableFan.getFullName?.();

console.log(fullName);

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.





// sync 동기  async 비동기
// 자바스크립트는 단일 스레드입니다.

const button = document.querySelector('.my-button');

const t = setTimeout(() => {
    
  const tag = `<button type="button" class="my-button">BTN</button>`; 

  document.body.insertAdjacentHTML('beforeend', tag);


},5000);

button?.addEventListener('click', () => {
  console.log('clicked!!');
});


let count = 0;

// const c = setInterval(() => {

//   document.querySelector('.second').style.transform = `translateY(-${++count}px) rotate(${count}deg)`;
  
//   console.log(count);

//   if( count >= 500) {
//     clearInterval(c);
//   }

// },0)


function animation (){

  document.querySelector('.second').style.transform = `translateY(-${++count}px) rotate(${count}deg)`;

  requestAnimationFrame(animation);
}