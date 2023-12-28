const closeButton = document.querySelector('.icon-close');
const loginFormWrapper = document.querySelector('.wrapper');
const loginButton = document.querySelector('.btnLogin-popup');
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener('click', () => {
  if (!document.body.contains(wrapper)) {
    document.body.appendChild(wrapper);
  }
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});
