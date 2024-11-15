


// 


class Todo {

  constructor({input, button, renderPlace}) {

    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);
    this.todoListArray = [];
    this.attachEvent()
    
  }


  get currentInputTodoData() {
    return this.input.value;
  }

  set currentInputTodoData(value) {
    this.input.value = value;
  }

  // 버튼에 이벤트 등록 input 값이 콘솔창에 나올 수 있도록 

  /*
    1. attachEvent 메서드를 만든다.
    2. 해당 메서드 안에서 button에게 click event를 바인딩 한다.
    3. click event에 연결할 handleClick 메서드를 만든다.
    4. handleClick 함수 안에서 input의 value를 가져온다.
    5. 콘솔창에 출력한다.
    6. 태그 만들기
    7. 렌더링 하기
  */
 
    createTag() {
      return `<li> ${this.currentInputTodoData} </li>`
    }

    #render() {
      this.renderPlace.insertAdjacentHTML('beforeend', this.createTag());
    }

    handleClick(){
      console.log(this.currentInputTodoData);
      this.#render();
    }


    attachEvent() {
      this.button.addEventListener('click', () => this.handleClick());
    }

}

const todo = new Todo({
  input: '.todo',
  button: '.btn',
  renderPlace: '.todoList'
});

