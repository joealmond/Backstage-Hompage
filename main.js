const toggleMenu = document.querySelectorAll(".collapsible");

const fn = document.getElementsByClassName("floating-menu__menu")[0];

let timer;

let menuOpen = false;

const floatingToggleMenu = document.querySelectorAll(
  ".floating-menu__collapsible"
);

const floatingMenu = document.querySelector(".floating-menu__menu");

let timermenu;

let menumenuOpen = false;

function removeCollapsibleElements(event) {
  event.classList.remove("collapsible-expanded");
}

function addCollapsibleElements(event) {
  event.classList.add("collapsible-expanded");
}

function removeFloatingMenuEventListener(event) {
  toggleMenu.forEach(removeCollapsibleElements);
}

function addFloatingMenuEventListener(event) {
  toggleMenu.forEach(addCollapsibleElements);
}

function floatingMenuHelper(event) {
  clearTimeout(timermenu);
  if (menuOpen === false) {
    addFloatingMenuEventListener();
    menuOpen = true;
    timer = setTimeout(() => {
      removeFloatingMenuEventListener();
      removeFloatingMenuMenuEventListener();
      window.addEventListener("click", floatingMenuButtonHelper);
      window.addEventListener("scroll", floatingMenuButtonHelper);
      menumenuOpen === false;
      menuOpen = false;
    }, 5000);
  } else {
    removeFloatingMenuEventListener();
    removeFloatingMenuMenuEventListener();
    window.addEventListener("click", floatingMenuButtonHelper);
    window.addEventListener("scroll", floatingMenuButtonHelper);
    menumenuOpen === false;
    menuOpen = false;
    clearTimeout(timer);
  }
}

fn.addEventListener("click", floatingMenuHelper);

function removeCollapsibleMenuElements(event) {
  event.classList.remove("floating-menu__collapsible-expanded");
}

function addCollapsibleMenuElements(event) {
  event.classList.add("floating-menu__collapsible-expanded");
}

function removeFloatingMenuMenuEventListener(event) {
  floatingToggleMenu.forEach(removeCollapsibleMenuElements);
}

function addFloatingMenuMenuEventListener(event) {
  floatingToggleMenu.forEach(addCollapsibleMenuElements);
}

function floatingMenuButtonHelper(event) {
  addFloatingMenuMenuEventListener();
  clearTimeout(timermenu);
  menumenuOpen = true;
  timermenu = setTimeout(() => {
    removeFloatingMenuMenuEventListener();
    menumenuOpen = false;
    window.addEventListener("click", floatingMenuButtonHelper);
    window.addEventListener("scroll", floatingMenuButtonHelper);
  }, 5000);
}

window.addEventListener("click", floatingMenuButtonHelper);
window.addEventListener("scroll", floatingMenuButtonHelper);

const toggleMobileMenu = document.querySelectorAll(".nav-menu__collapsible");

const selectMobileMenuButton = document.querySelector(".mobile-button");

function mobilMenuHelper(event) {
  addMobilMenuEventListener(event);
  // event.stopImmediatePropagation();
}

function toggleMobilMenu(event) {
  event.classList.toggle("nav-menu__collapsible-expanded");
}

function addMobilMenuEventListener(event) {
  toggleMobileMenu.forEach(toggleMobilMenu);
}

selectMobileMenuButton.addEventListener("click", mobilMenuHelper);
