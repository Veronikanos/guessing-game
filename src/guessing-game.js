class GuessingGame {
  constructor() {
    this.left = 0;
    this.right = 1000;
    this.middle;
  }

  setRange(min, max) {
    this.left = min;
    this.right = max;
  }

  guess() {
    return (this.middle = Math.round((this.left + this.right) / 2));
  }

  lower() {
    this.right = this.middle;
  }

  greater() {
    this.left = this.middle;
  }
}

module.exports = GuessingGame;
