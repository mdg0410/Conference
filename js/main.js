const sidebar = document.querySelector('.sidebar');

document.querySelector('.hamburguer').addEventListener('click', () => {
  sidebar.style.left = '0';
});
document.querySelector('#closeMenu').addEventListener('click', () => {
  sidebar.style.left = '100%';
});
document.querySelector('.menu-items').addEventListener('click', () => {
  sidebar.style.left = '100%';
});