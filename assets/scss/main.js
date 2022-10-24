var x = document.getElementsByClassName("c-hamburger__icon--open");
var y = document.getElementsByClassName("c-hamburger__content");
var z = document.getElementsByClassName("c-hamburger__icon--close");

x[0].addEventListener("click", function () {
  y[0].style.transform = "translateY(0)";
});

z[0].addEventListener("click", function () {
  y[0].style.transform = "translateY(-100%)";
});
