'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
// function for open modal
let clickToOpen = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// function for close modal
let clickToClose = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openModal.length; i++)
  openModal[i].addEventListener('click', clickToOpen);

closeModal.addEventListener('click', clickToClose);
overlay.addEventListener('click', clickToClose);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    clickToClose();
  }
});
