import math from './math';

export default class Daemon extends math {
  constructor(square, stoned) {
    super();
    this.square = square;
    this.stoned = stoned;
  }

  set(attack) {
    this.attack = attack;
  }

  get() {
    if (!this.stoned) {
      return this.retAttack();
    }
    return this.retStonedAttack();
  }
}
