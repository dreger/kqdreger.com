// Taken from Daniel Eden
// https://github.com/daneden/daneden.me/blob/master/_assets/js/light-switch.js
// Toggle night theme


var d = document.documentElement,
nightTime = localStorage.getItem("nightTime");

if(nightTime == "false") {
  d.classList.remove("night");
} else {
  d.classList.add("night");
}

var lightSwitch = document.getElementById("light-switch");
lightSwitch.onclick = switchLights;

function switchLights(){
  if(d.classList.contains("night")) {
    // lightSwitch.innerHTML = "&#x1f319U+FE0E;"
    d.classList.remove("night");
    localStorage.setItem("nightTime", "false");
  } else {
    // lightSwitch.innerHTML = "&#9728;"
    d.classList.add("night");
    localStorage.setItem("nightTime", "true");
  }
};
