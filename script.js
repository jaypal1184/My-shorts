// Future buttons functionality
console.log("Script loaded!");
function playVideo(src) {
  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("popupVideo");
  video.src = src;
  popup.style.display = "flex";
  video.play();
}

function closePopup() {
  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("popupVideo");
  video.pause();
  video.src = "";
  popup.style.display = "none";
}
