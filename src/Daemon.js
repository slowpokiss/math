import math from './math';

export default class Daemon extends math {
  constructor(square) {
    super();
    this.square = square;
  }

  setStonedAttack(attack) {
    this.attack = attack;
  }

  getStonedAttack() {
    return this.retStonedAttack();
  }

  setAttack(attack) {
    this.attack = attack;
  }

  getAttack() {
    return this.retAttack();
  }
}
