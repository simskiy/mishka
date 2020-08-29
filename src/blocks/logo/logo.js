let logo = document.querySelector('.logo > img');

function changeLogo() {
  if (document.body.clientWidth > 0) {
    logo.src = 'img/svg/logo-mobile.svg';
    logo.width = '86';
  }
  if (document.body.clientWidth >= 768) {
    logo.src = 'img/svg/logo-tablet.svg';
    logo.width = '112';
  }
  if (document.body.clientWidth >= 1200) {
    logo.src = 'img/svg/logo-desktop.svg';
  }
}

window.addEventListener('resize', changeLogo);
window.addEventListener('load', changeLogo);
