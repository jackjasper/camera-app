// From here, modified:
// https://blog.prototypr.io/make-a-camera-web-app-tutorial-part-1-ec284af8dddf

// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
// Define constants
const cameraView = document.querySelector("#camera--view"),
cameraOutput = document.querySelector("#camera--output"),
cameraSensor = document.querySelector("#camera--sensor"),
cameraTrigger = document.querySelector("#camera--trigger")

// Main start
function mainStart() {
    cameraStart();
    run;
}

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function(stream) {
          track = stream.getTracks()[0];
          cameraView.srcObject = stream;
          })
    .catch(function(error) {
           console.error("Oops. Something is broken.", error);
           });
}
// Take a picture when cameraTrigger is tapped
//cameraTrigger.onclick = 
function takePic() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};

function run() {
    var i;
    for (i = 0; i < 1000; i++) {
        takePic();
    }
}

// Start the video stream when the window loads
window.addEventListener("load", mainStart, false);
