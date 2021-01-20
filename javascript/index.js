const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  let minutes = chronometer.getMinutes()
  let seconds = chronometer.getSeconds()

  printMinutes(minutes)
  printSeconds(seconds)
  //not entirely sure why
}

function printMinutes(minutes) {
  // ... your code goes here
  let printedMinutes = chronometer.twoDigitsNumber(minutes)

  minDec.textContent = printedMinutes[0];
  minUni.textContent = printedMinutes[1];
}

function printSeconds(seconds) {
  // ... your code goes here

  let printedSeconds = chronometer.twoDigitsNumber(seconds)

  console.log(printedSeconds)
  secDec.textContent = printedSeconds[0]
  secUni.textContent = printedSeconds[1]
}

// // ==> BONUS
// function printMilliseconds() {
//   // ... your code goes here
// }

function printSplit() {
  let newList = document.createElement('li')

  let info = chronometer.splitClick()

  console.log(info)

  newList.innerHTML = info

  splits.appendChild(newList)
}

// function clearSplits() {
// }

function setStopBtn() {
  btnLeft.innerHTML = 'STOP'
  btnLeft.setAttribute('class', 'btn stop')
}

function setSplitBtn() {
  btnRight.innerHTML= 'SPLIT'
  btnRight.setAttribute('class', 'btn split')
}

function setStartBtn() {
  btnLeft.innerHTML= 'START'
  btnLeft.setAttribute('class', 'btn start')
}

function setResetBtn() {
  btnRight.innerHTML= 'RESET'
  btnRight.setAttribute('class', 'btn reset')
  //clearSplits()
}


// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === "START"){
    chronometer.startClick(printTime)
    setStopBtn()
    setSplitBtn()
  } else {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === "RESET"){
    chronometer.resetClick()
    printTime()
  } else {
    setSplitBtn()
    printSplit()
  }
});
