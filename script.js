function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //access the audio attribute -> audio[ ]
  //attribute is data-key = " "
  //data-key is ${e.keyCode}
  //ie: audio[data-key="45"]
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  //access the div attribute -> div[ ]
  if (!audio) return;
  //if audio is false, dont execute function

  key.classList.add('playing');
  //if audio is true, add .playing
  audio.currentTime = 0;
  //return time to 0
  audio.play();
  //play audio
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);