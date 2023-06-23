const navBar          = document.querySelector(".navbar");
const navBarLink      = document.querySelector(".navbar__link");
const hamburger       = document.querySelector(".hamburger");
const hamburgerClose  = document.querySelector(".hamburger--close");
const hamburgerOpen   = document.querySelector(".hamburger--open");
const buy             = document.querySelector(".buy");
// const logo            = document.querySelector(".logo");



const toggleMenu = () => {
  if (navBar.classList.contains("showMenu")) {
    navBar.classList.remove("showMenu");
    hamburgerClose.style.display = "none";
    hamburgerOpen.style.display = "block";
    buy.style.display = "none";
    // logo.style.display = "block";
  } else {
    navBar.classList.add("showMenu");
    hamburgerClose.style.display = "block";
    hamburgerOpen.style.display = "none";
    buy.style.display = "block";
    // logo.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

// navBarLink.forEach(
//   function (navbarlink) {
//     navbarlink.addEventListener("click", toggleMenu);
//   }
// )

