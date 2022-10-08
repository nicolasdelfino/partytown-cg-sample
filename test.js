const circle = document.getElementById("circle");
let xPos = 0; // animation parameters
let yPos = 0;

circle.style.left = xPos + "px";
circle.style.top = yPos + "px";

const posXDiv = document.getElementById("posX");
const posYDiv = document.getElementById("posY");

setInterval(function () {
  if (xPos > 300) {
    xPos = 0;
    yPos += 40;
  }
  1;

  if (yPos > 100) {
    yPos = 0;
  }

  xPos += 10;

  circle.style.left = xPos + "px";
  circle.style.top = yPos + "px";

  posXDiv.innerHTML = circle.style.left;
  posYDiv.innerHTML = circle.style.top;
}, 25);
