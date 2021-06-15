function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('hidden', visible);
}

document.querySelector('.hamburger').addEventListener('click', function(element) {
  element.preventDefault();
  toggleMenu();
  console.log('Clicked');
});