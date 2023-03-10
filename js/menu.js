(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-mobile-open]'),
    closeMenuBtn: document.querySelector('[data-mobile-close]'),
    menu: document.querySelector('[data-mobile]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.menu-list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden-mobile');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menu.classList.add('is-hidden-mobile');
    refs.body.classList.remove('no-scroll');
  }
})();