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

  newList.innerHTML = `${chronometer.getMinutes()}:${chronometer.getSeconds()}`

  splits.appendChild(newList)
}

// function clearSplits() {
//   // ... your code goes here
// }

function setStopBtn() {
  if (btnLeft.innerHTML === "STOP"){
    chronometer.stopClick()
  
    btnLeft.innerHTML = "START"
    btnLeft.classList.add('start')
  } 
}

function setSplitBtn() {
  if (btnRight.innerHTML === "SPLIT"){
    chronometer.splitClick()

    btnRight.innerHTML = "RESET"
    btnRight.classList.add('split')
  } 

  console.log("SetSplitBtn has been clicked")
}

function setStartBtn() {
  if (btnLeft.innerHTML === "START"){
    chronometer.startClick(printTime)

    btnLeft.innerHTML = "STOP"
    btnLeft.classList.add('stop')
  } 
}

function setResetBtn() {
  if (btnRight.innerHTML === "RESET"){
    chronometer.resetClick()
    printTime()

    btnRight.innerHTML = "SPLIT"
    btnRight.classList.add('split')
  } 
}


// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === "START"){
    setStartBtn()
  } else {
    setStopBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === "RESET"){
    setResetBtn()
  } else {
    setSplitBtn()
  }
});
