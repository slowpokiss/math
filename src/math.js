export default class math {
  set attack(attack) {
    this._attack = attack;
  }

  get attack() {
    return this._attack - (this.square - 1) * 10;
  }

  set stoned(IsStoned) {
    this._stoned = IsStoned;
  }

  get stoned() {
    return this.attack - Math.log2(this.square) * 5;
  }
}
