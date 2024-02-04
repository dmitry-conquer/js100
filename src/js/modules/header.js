const burgerButton = document.getElementById("burger-button");
const burgerInner = document.getElementById("burger-inner");
const burgerCross = document.getElementById("burger-cross");
const burgerMenu = document.getElementById("header-nav");

if (burgerButton) {
  burgerButton.addEventListener("click", e => {
    if (!burgerMenu.classList.contains("active-menu")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = null;
    }
    burgerCross.classList.toggle("active-burger");
    burgerInner.classList.toggle("active-burger");
    burgerMenu.classList.toggle("active-menu");
  });
  // burgerMenu.addEventListener("click", e => {
  //   if (e.target.closest("a")) {
  //     burgerCross.classList.remove("active-burger");
  //     burgerInner.classList.remove("active-burger");
  //     burgerMenu.classList.remove("active-menu");
  //     document.body.style.overflow = null;
  //   }
  // });
}
