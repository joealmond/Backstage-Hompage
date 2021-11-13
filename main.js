const toggleMenu = document.querySelectorAll(".collapsible");

const fn = document.getElementsByClassName("floating-menu__menu")[0];

let timer;

let menuOpen = false;

// captureClickAndToggle(fn, toggleMenu, "collapsible-expanded");

// function captureClickAndToggle(
//   selectedElement,
//   nodeListOfCollapsibleElement,
//   classNameToToggle
// ) {
//   selectedElement.addEventListener("click", function () {
//     let t = setTimeout(() => {
//       nodeListOfCollapsibleElement.forEach(function (e) {
//         e.classList.toggle(classNameToToggle);
//       });
//     }, 5000);
//     nodeListOfCollapsibleElement.forEach(function (e) {
//       e.classList.toggle(classNameToToggle);
//       clearTimeout(t);
//     });
//   });
// }

// const timer = setTimeout(() => {}, 5000);
// clearTimeout(timer);

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
  if (menuOpen === true) {
    removeFloatingMenuEventListener();
    menuOpen = false;
    clearTimeout(timer);
  } else {
    addFloatingMenuEventListener();
    menuOpen = true;
    timer = setTimeout(() => {
      removeFloatingMenuEventListener();
      menuOpen = false;
    }, 5000);
  }
}

fn.addEventListener("click", floatingMenuHelper);
// fn.removeEventListener("click", floatingMenuEventListener);
