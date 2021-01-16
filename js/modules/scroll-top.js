export default function initScrollTop() {
  const arrow = document.querySelector('.arrow-footer');

  function scrollingTop(event) {
    const positionTop = window.scrollTo({top: 0, behavior: 'smooth'});
    event = positionTop;
  }

  arrow.addEventListener('click', scrollingTop)
}