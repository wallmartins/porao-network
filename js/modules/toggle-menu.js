export default function initToggleMenu() {
  const checkBox = document.getElementById('menuToggle');
  const menuItems = document.querySelectorAll('.menuContent a[href^="#"]');

  const unckeck = '#menuToggle:not(:checked)';

  menuItems.forEach((item) => {
    item.addEventListener('click', () => checkBox)
  })

  console.log(menuItems)
}