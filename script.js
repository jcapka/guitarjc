let notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A♭', 'B♭', 'D♭', 'E♭', 'G♭', 'A♯', 'C♯', 'D♯', 'F♯', 'G♯'];
let running = true;
let secondsDelay = 3;

function getNote() {
  let notePos = Math.floor(Math.random() * notes.length);
  return notes[notePos];
}

async function streamNotes() {
  while (running) {

    let noteDiv = document.getElementById('note').setHTML(getNote());

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    await delay(secondsDelay * 1000); /// waiting
  }
}

function start() {
  running = true;
  document.getElementById('speed').setHTML(secondsDelay);
  streamNotes();
}

function stop() {
  running = false;
}

function faster() {
  secondsDelay -= 0.5;
  document.getElementById('speed').setHTML(secondsDelay);
}

function slower() {
  secondsDelay += 0.5;
  document.getElementById('speed').setHTML(secondsDelay);
}

window.onload = start;