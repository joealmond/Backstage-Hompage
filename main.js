const toggleMenu = document.querySelectorAll(".collapsible");

const fn = document.getElementsByClassName("floating-menu__menu")[0];

captureClickAndToggle(fn, toggleMenu, "collapsible-expanded");

function captureClickAndToggle(
  selectedElement,
  nodeListOfCollapsibleElement,
  classNameToToggle
) {
  selectedElement.addEventListener("click", function () {
    setTimeout(() => {
      nodeListOfCollapsibleElement.forEach(function (e) {
        e.classList.toggle(classNameToToggle);
      });
    }, 5000);
    nodeListOfCollapsibleElement.forEach(function (e) {
      e.classList.toggle(classNameToToggle);
    });
  });
}
