var x = document.getElementsByClassName("c-nav__mobile--open");
var y = document.getElementsByClassName("c-nav__item");
var z = document.getElementsByClassName("c-nav__mobile--close");

x[0].addEventListener("click", function () {
  y[0].style.transform = "translateY(0)";
});

z[0].addEventListener("click", function () {
  y[0].style.transform = "translateY(-100%)";
});


// $(document).ready(function(){
//   $(".c-nav__mobile--close").click(function(){
//     $(".c-nav__item").fadeOut();
//   });
//   $(".c-nav__mobile--open").click(function(){
//     $(".c-nav__item").fadeIn();
//   });
// });