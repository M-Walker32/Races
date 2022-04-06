import { RacerController } from "./RacerController.js"

class App {
  RacerController = new RacerController()
}

window["app"] = new App()