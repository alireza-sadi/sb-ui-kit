function showMenu(el) {
  s = el.children[1];
  s.style.visibility = "visible";
  s.style.opacity = "1";
  s.addEventListener("mouseleave", () => {
    s.style.visibility = "hidden";
    s.style.opacity = "0";
  });
}
navBar = document.querySelector(".navbar");

const sticky = navBar.offsetTop + navBar.offsetHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY >= sticky) {
    navBar.style.position = "sticky";
    navBar.style.backgroundImage = "var(--background-gradient)";
  } else {
    navBar.style.position = "absolute ";
    navBar.style.backgroundImage = "none";
  }
});
