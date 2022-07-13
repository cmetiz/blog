const item = document.querySelectorAll('.item');
const itemButtons = document.querySelectorAll('.item-button');
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-item');

const closeItems = function() {
  for(var i = 0; i < item.length; i++) {
    item[i].classList.remove("active");
  }
}

itemButtons.forEach(button => button.addEventListener("click", function() {
  this.parentElement.classList.toggle('active');
}));

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('active');
  menu.classList.toggle('active');
});

menuLinks.forEach(links => links.addEventListener('click', function() {
  burgerMenu.classList.toggle('active');
  menu.classList.toggle('active');
  closeItems();
}));

menu.addEventListener('click', closeItems);