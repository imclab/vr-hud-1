var hudState = "open";

function onkey(event) {
  switch (String.fromCharCode(event.charCode)) {
  case 'f':
    cssContainer.mozRequestFullScreen({ vrDisplay: vrHMD });
    break;
  case 'z':
    vrSensor.zeroSensor();
    break;
  case 'h':
    toggleHUD();
    break;
  }
}

function toggleHUD() {
  if ( hudState == "open" ) {
    $(bookmarks).animate({ opacity: 0 }, 1000);
    hudState = "closed";
  } else if ( hudState == "closed" ) {
    $(bookmarks).animate({ opacity: 1 }, 1000);
    hudState = "open";
  }
}


function init() {

  cssCamera = document.getElementById("camera");
  cssContainer = document.getElementById("container");

  if (navigator.getVRDevices)
    navigator.getVRDevices().then(vrDeviceCallback);

}


window.addEventListener("load", init, false);
window.addEventListener("keypress", onkey, true);