const video = document.querySelector
const button = document.querySelector

function MediaPlayer(config) {
  this.media = config.el
}
MediaPlayer.prototype.play = function() {
  video.play();
}
const player = new MediaPlayer({ el: video })
button.onclick = () => video.play();
