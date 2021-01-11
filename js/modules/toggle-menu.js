export default function initToggleMenu() {
  const menuContent = document.querySelector('.menu-content');
  const openBtn = document.querySelector('.open');
  const closeBtn = document.querySelector('.close');
  const menuLinks = document.querySelectorAll('.menu-content a[href^="#"]');

  console.log(menuLinks);

  function openModal() {
    menuContent.classList.add('active');
  }

  function closeModal() {
    menuContent.classList.remove('active');
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  menuLinks.forEach((link) => link.addEventListener('click', closeModal));
}