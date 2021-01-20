class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      console.log(this.currentTime)
      callback()
    }, 1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    let seconds = this.currentTime % 60//remainder
    return seconds
  }

  twoDigitsNumber(num) {
    return ("0"+ num).slice(-2)
  }

  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
    console.log("stop called")
  }

  resetClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
    this.currentTime = 0
    console.log("reset called")
  }

  splitClick() {
    // ... your code goes here
    let minutes = this.getMinutes()
    let seconds = this.getSeconds()
    console.log("split called")

    return `0${minutes}:0${seconds}`
  }
}
