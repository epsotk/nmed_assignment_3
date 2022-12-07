var isLightOn = false;
var isClockOn = false;
var rotation = 0;
var datetime = new Date();

const click = document.getElementById("click");
const nokia = document.getElementById("nokia");

$("#lightswitch").on("click", function () {
  click.play();
  isLightOn = !isLightOn;
  isLightOn
  ? lightOn()
  : lightOff()
});

$("#rotate").on("click", function () {
  rotate();
});

$("#ringtone").on("click", function () {
  nokia.play();
});

$("#random").on("click", function () {
  randomizeColours();
});

$("#clock").on("click", function () {
  console.log("farts");
  isClockOn = !isClockOn;
  isClockOn? $(".timebox").css("opacity", "1") : $(".timebox").css("opacity", 0) ;
});

function lightOn() {
  $("#light").attr("src", "img/svg/speciwoman-Light-switch-on.svg");
  $("body").css("background", "linear-gradient(146deg, rgba(255,255,255,1) 19%, rgba(228,224,179,1) 100%)");
  $(".funbox").css("display", "flex");
}
function lightOff() {
  $("#light").attr("src", "img/svg/speciwoman-Light-switch-off.svg");
  $("body").css("background", "black");
  $(".funbox").css("display", "none");
}

function rotate() {
  rotation += 360;
  $(".container").css("transform", "rotate(" + rotation + "deg" + ")");
}

function randomizeColours() {
  var invert = Math.floor(Math.random() * 100);
  var sepia = Math.floor(Math.random() * 100);
  var saturate = Math.floor(Math.random() * 100);
  var hueRotate = Math.floor(Math.random() * 360);
  var brightness = Math.floor(Math.random() * 50) + 50;
  var contrast = Math.floor(Math.random() * 100);
  $(".filter").css("filter","invert("+invert+"%) sepia("+sepia+"%) saturate("+100+"%) hue-rotate("+hueRotate+"deg) brightness("+brightness+"%) contrast("+contrast+"%)");
}

// I used https://iq.opengenus.org/display-live-time-and-date-in-html/
// for the following function:

function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);