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

if (window.scrollY >= sticky) {
  console.log("yes")
  navBar.style.position = "sticky";
  navBar.style.backgroundImage = "var(--background-gradient)";
} else {
    console.log("no")
    navBar.style.position = "absolute " ;
    navBar.style.backgroundImage = "transparent";
}
  console.log(sticky)
// window.addEventListener("scroll", () => {
//   navBar.style.position = "sticky";
//   navBar.style.backgroundImage = "var(--background-gradient)";
// });
