let logo = document.querySelector('.logo__img');
let img = document.querySelector('#logo__img');

function changeLogo() {
  if (document.body.clientWidth > 0) {
    img.attributes['xlink:href'].value = 'img/svg/index-sprite.svg#logo-mobile';
    logo.attributes.width.value = '86';
    logo.attributes.height.value = '35';
  }
  if (document.body.clientWidth >= 768) {
    img.attributes['xlink:href'].value = 'img/svg/index-sprite.svg#logo-tablet';
    logo.attributes.width.value = '112';
    logo.attributes.height.value = '46';
  }
  if (document.body.clientWidth >= 1150) {
    img.attributes['xlink:href'].value = 'img/svg/index-sprite.svg#logo-desktop';
    logo.attributes.width.value = '149';
    logo.attributes.height.value = '72';
  }
}

window.addEventListener('resize', changeLogo);
window.addEventListener('load', changeLogo);
