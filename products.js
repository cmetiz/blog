'use strict';

var item = document.querySelectorAll('.item');
var itemButtons = document.querySelectorAll('.item-button');
var burgerMenu = document.querySelector('.burger-menu');
var menu = document.querySelector('.menu');
var menuLinks = document.querySelectorAll('.menu-item');

var closeItems = function closeItems() {
  for (var i = 0; i < item.length; i++) {
    item[i].classList.remove("active");
  }
};

for (var i = 0; i < itemButtons.length; i++) {
  itemButtons[i].addEventListener("click", function () {
    this.parentElement.classList.toggle('active');
  });
}
// itemButtons.forEach(function (button) {
//   return button.addEventListener("click", function () {
//     this.parentElement.classList.toggle('active');
//   });
// });

burgerMenu.addEventListener('click', function () {
  burgerMenu.classList.toggle('active');
  menu.classList.toggle('active');
});

for (var i = 0; i < menuLinks.length; i++) {
menuLinks[i].addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
    closeItems();
  });
}

menu.addEventListener('click', closeItems);