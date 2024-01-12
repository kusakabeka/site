const buttonElem = document.querySelector('.soc-button');
const modalElem = document.querySelector('.tg-main-block');

modalElem.style.cssText = `
	display: flex;
	visibility: hidden;
	opacity: 0;
	transition: opacity 300ms ease-in-out;
`;

function closeModal() {
  const target = event.target;
  modalElem.style.opacity = 0;
  setTimeout(() => {
    modalElem.style.visibility = 'hidden';
  }, 300)
}
function openModal() {
  modalElem.style.visibility = 'visible';
  modalElem.style.opacity = 1;
}

buttonElem.addEventListener('click', function() {
  if (modalElem.style.visibility === 'visible') {
    closeModal();
  }
  else {
    openModal();
  }
});

window.addEventListener('load', function() {
  setTimeout(openModal, 1000);
});
