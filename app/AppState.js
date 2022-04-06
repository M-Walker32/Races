import { Racer } from "./models/racer.js"

let racer1 = new Racer('cat', 'mdi mdi-cat', '0')
let racer2 = new Racer('pony', 'mdi mdi-horse-human', '0')
let racer3 = new Racer('pig', 'mdi mdi-pig-variant', '0')
let racer4 = new Racer('duck', 'mdi mdi-duck', '0')

export const AppState = {
  racers: [racer1, racer2, racer3, racer4]
}