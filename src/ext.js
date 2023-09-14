import math from './math';

export default class ext extends math {
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
