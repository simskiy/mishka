let btn_show = document.querySelector('.modal-size');
let modal = document.querySelector('.modal');
let btn_close = document.querySelector('.modal__close');

btn_show.addEventListener('click', showCloseModal);
btn_close.addEventListener('click', showCloseModal);

function showCloseModal(event) {
  event.preventDefault();
  modal.classList.toggle('modal--hidden');
}

