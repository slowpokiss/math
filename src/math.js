export default class math {
  retAttack() {
    return this.attack - (this.square - 1) * 10;
  }

  retStonedAttack() {
    return this.retAttack() - Math.log2(this.square) * 5;
  }
}
