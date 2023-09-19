export default class math {
  set attack(attack) {
    this._attack = attack;
  }

  get attack() {
    if (this._stoned) {
      return this._attack - Math.log2(this.square) * 5 - (this.square - 1) * 10;
    }
    return this._attack - (this.square - 1) * 10;
  }

  set stoned(isStoned) {
    this._stoned = isStoned;
  }

  get stoned() {
    return this._stoned;
  }
}
