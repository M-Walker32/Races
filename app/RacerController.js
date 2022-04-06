import { AppState } from "./AppState.js"
import { Racer } from "./models/racer.js"
// import { racerService}

function _drawRacers() {
  let template = ''
  const racers = AppState.racers
  racers.forEach(r => template += r.Template)
  document.getElementById('raceTrack').innerHTML = template
}

function _moveRacers() {
  // This is selecting a racer at random, we want it to move our racer by a random amount
  const move = AppState.racers.position
  // let num = Math.floor(Math.random() * 3)
  // for (let index = 0; index < num; index++) {
  console.log(move)
  // console.log(move[index])
  // }
}
setInterval(_moveRacers(), 100)
export class RacerController {
  constructor() {
    // console.log('hello from racer controller')
    this.drawRacers()
    this.moveRacers()
  }
  drawRacers() {
    _drawRacers()
  }

  moveRacers() {
    _moveRacers()
  }
}

