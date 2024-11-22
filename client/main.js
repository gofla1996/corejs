import {
  tiger,
  delayP,
  getNode,
  changeColor,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
} from './lib/index.js';

const userCardInner = getNode('.user-card-inner');

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    const response = await tiger.get(END_POINT);

    // getNode('.loadingSpinner').remove()

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete(){
        this._targets[0].remove()
      }
    });

    const data = response.data;

    console.log(data);

    await delayP(1000)

    data.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card', {
      x: -100,
      opacity: 0,
      stagger: {
        amount: 1,
        from: 'start',
      },
    });

  } catch (error) {

    renderEmptyCard(userCardInner);
  }
}

renderUserList();


function handleDeleteCard(e){
  const button = e.target.closest('button');

  if(!button) return;

  const article = button.parentElement;
  const index = article.dataset.index.slice(5);

  tiger.delete(`${END_POINT}/${index}`).then(()=>{
    alert('삭제가 완료됐습니다.')
  });

}




userCardInner.addEventListener('click', handleDeleteCard);
