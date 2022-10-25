var x = document.getElementsByClassName("c-nav__mobile--open");
var y = document.getElementsByClassName("c-nav__item");
var z = document.getElementsByClassName("c-nav__mobile--close");

x[0].addEventListener("click", function () {
  y[0].style.transform = "translateY(0)";
});

z[0].addEventListener("click", function () {
  y[0].style.transform = "translateY(-100%)";
});
