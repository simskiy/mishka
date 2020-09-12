let logo = document.querySelector('.logo > svg');
let img = document.querySelector('#logo__img');

function changeLogo() {
  if (document.body.clientWidth > 0) {
    img.attributes['xlink:href'].value = 'img/svg/index-sprite.svg#logo-mobile';
    logo.attributes.width.value = '86';
  }
  if (document.body.clientWidth >= 768) {
    img.attributes['xlink:href'].value = 'img/svg/index-sprite.svg#logo-tablet';
    logo.attributes.width.value = '112';
  }
  if (document.body.clientWidth >= 1150) {
    img.attributes['xlink:href'].value = 'img/svg/index-sprite.svg#logo-desktop';
  }
}

window.addEventListener('resize', changeLogo);
window.addEventListener('load', changeLogo);
