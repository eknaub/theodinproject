let header = document.querySelector('header');
let sticky = header.offsetTop;

window.addEventListener('scroll', () => {
  if(window.scrollY > sticky) {
    header.classList.add('scrolled');
  }
  else {
    header.classList.remove('scrolled');
  }
})