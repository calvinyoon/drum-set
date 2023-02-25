var _ = require("lodash");
console.log(_);

function playSound(e) {
  //input is e which has keyCode.

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //we want to access audio element that has corresponding keyCode as attribute.
  //ie: access element with audio[data-key="45"]
    //attribute is data-key = " "
    //data-key is ${e.keyCode}
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  //access the div element that has corresponding keyCode as attribute
  //ie: access element with div[data-key="45"]


  if (!audio) return;
  //if audio is false, dont execute function

  key.classList.add('playing');
  //else, add .playing to key element

  audio.currentTime = 0;
  //rewind to start
  audio.play();
  //play audio
}

function removeTransition(e) {
    //event here is transitionend 
    if (e.propertyName !== 'transform') return;
    //arbitrarily selected transform but usually should be longest event
    this.classList.remove('playing');
    //this here is key bc its object that got called in transitionend listener
}

const keys = Array.from(document.querySelectorAll('.key'));


keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//listen on each key for which transitionend happened
//cannot listen to all node elements simultaneously - need forEach

window.addEventListener('keydown', playSound);

keys.forEach(key => {if (key.classList.contains('key')) { 
   key.addEventListener('click', (e) => {
    let audioclick = document.querySelector(`audio[data-key="${key.getAttribute('data-key')}"`);
    if (!audioclick) return;
    key.classList.add(`playing`);
    audioclick.currentTime = 0;
    audioclick.play();
  })
}});


