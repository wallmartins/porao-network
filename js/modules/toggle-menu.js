export default function initToggleMenu() {
  const closeBtn = document.querySelector('.close');
  const menuClicked = document.querySelectorAll('.menuContent');

  menuClicked.forEach((link) => link.addEventListener('click', closeBtn))
}