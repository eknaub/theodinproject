let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if(window.scrollY > Number(50)) {
    header.classList.add('scrolled');
  }
  else {
    header.classList.remove('scrolled');
  }
})