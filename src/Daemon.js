import ext from './ext';

export default class Daemon extends ext {
  constructor(square, stoned) {
    super();
    this.square = square;
    this.stoned = stoned;
  }
}
