const siteWrapper = document.querySelector('.site-wrapper');
const control1 = document.querySelector('.control-1');
const control2 = document.querySelector('.control-2');
const control3 = document.querySelector('.control-3');

const contactsButton = document.querySelector('.contacts-button');
const contactsModal = document.querySelector('.contacts-modal');
const overlay = document.querySelector('.overlay');
const contactsModalClose = document.querySelector('.contacts-modal-close');
const contactsModalName = contactsModal.querySelector('[name=contact-name');


contactsButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  overlay.classList.add('visible');
  contactsModalName.focus();
});

contactsModalClose.addEventListener('click', function() {
  overlay.classList.remove('visible');
});

control1.addEventListener('click', function() {
  control1.classList.add('current');
  control2.classList.remove('current');
  control3.classList.remove('current');
  siteWrapper.classList.remove('site-wrapper-2');
  siteWrapper.classList.remove('site-wrapper-3');
  siteWrapper.classList.add('site-wrapper-1');
});

control2.addEventListener('click', function() {
  control2.classList.add('current');
  control1.classList.remove('current');
  control3.classList.remove('current');
  siteWrapper.classList.remove('site-wrapper-1');
  siteWrapper.classList.remove('site-wrapper-3');
  siteWrapper.classList.add('site-wrapper-2');
});

control3.addEventListener('click', function() {
  control3.classList.add('current');
  control1.classList.remove('current');
  control2.classList.remove('current');
  siteWrapper.classList.remove('site-wrapper-1');
  siteWrapper.classList.remove('site-wrapper-2');
  siteWrapper.classList.add('site-wrapper-3');
});

