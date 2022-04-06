export class Racer {
  constructor(name, icon, position) {
    this.name = name
    this.icon = icon
    this.position = position
  }

  move() {
    console.log('move')
  }

  get Template() {
    return `
    <div class="col-10 raceline justify-content-center">
    <div class="m-3">
    <i class="${this.icon}" id="${this.name}" title="${this.name}"></i>
    </div>
          </div>
        </div>`
  }
}


