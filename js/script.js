const navlinks = document.querySelector('.navlinks');
const menu = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-x');
// console.log(menu)

menu.addEventListener('click', () => {
  navlinks.classList.add('open');
  close.classList.add('show');
});

close.addEventListener('click', () => {
  navlinks.classList.remove('open');
  close.classList.remove('show');
});