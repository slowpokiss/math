export default class math {
  set(attack) {
    this.attack = attack;
  }

  get() {
    if (!this.stoned) {
      return this.retAttack();
    }
    return this.retStonedAttack();
  }

  retAttack() {
    return this.attack - (this.square - 1) * 10;
  }

  retStonedAttack() {
    return this.retAttack() - Math.log2(this.square) * 5;
  }
}
