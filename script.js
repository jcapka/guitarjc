const NOTES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A♭', 'B♭', 'D♭', 'E♭', 'G♭', 'A♯', 'C♯', 'D♯', 'F♯', 'G♯'];
const NUM_NOTES = NOTES.length;
const MAX_DELAY = 10;
const MIN_DELAY = 0.5;

let SPEED_EL;
let NOTE_EL; 

let running = true;
let secondsDelay = 3;


function getNote() {
  let notePos = Math.floor(Math.random() * NUM_NOTES);
  return NOTES[notePos];
}

async function streamNotes() {
  while (running) {

    NOTE_EL.setHTML(getNote());

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    await delay(secondsDelay * 1000); /// waiting
  }
}

function initialize(){
  SPEED_EL = document.getElementById('speed');
  NOTE_EL = document.getElementById('note');
  start();
}

function start() {
  running = true;
  SPEED_EL.setHTML(secondsDelay);
  streamNotes();
}

function stop() {
  running = false;
}

function faster() {
  if(secondsDelay > MIN_DELAY){
    secondsDelay -= 0.5;  
  }
  SPEED_EL.setHTML(secondsDelay);
}

function slower() {
  if(secondsDelay < MAX_DELAY){
    secondsDelay += 0.5;
  }
  SPEED_EL.setHTML(secondsDelay);
}

window.onload = initialize;