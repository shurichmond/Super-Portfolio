const navlinks = document.querySelector('.navlinks');
const menu = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-x');
const ulLinks = document.querySelector('links');
// console.log(menu)

menu.addEventListener('click', () => {
  navlinks.classList.add('open');
  close.classList.add('show');
});

close.addEventListener('click', () => {
  navlinks.classList.remove('open');
  close.classList.remove('show');
});

ulLinks.addEventListener('click', () => {
  
}) 