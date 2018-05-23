var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

css.textContent = body.style.background + ";";
}

setGradient();

 function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.round(Math.random() * 16)];
//
color1.value= getRandomNumber();
color2.value= getRandomNumber() ;
}
//     return color;
//   }
//
// function setRandomColor() {
//     $(".color1").val(getRandomColor());
//     $(".color2").val(getRandomColor());
//     setGradient();
  // }

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
