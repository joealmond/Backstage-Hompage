let fn = document.getElementsByClassName("floating-menu")[0];
fn.style.opacity = "0";
window.addEventListener("scroll", function () {
  fn.style.opacity = "0.7";
  setTimeout(function () {
    fn.style.opacity = "0";
  }, 5000);
});
document.body.addEventListener(
  "click",
  function () {
    console.log("click");
    fn.style.opacity = "0.7";
    setTimeout(function () {
      fn.style.opacity = "0";
    }, 5000);
  },
  true
);
