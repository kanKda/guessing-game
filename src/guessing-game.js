class GuessingGame {
    constructor() {
        this.arr = [];
    }

    setRange(min, max) {
        for (let i = min; i <= max; i++) {
            this.arr.push(i);
        }
    }

    guess() {
        this.middle = Math.round(this.arr.length / 2);
        return this.arr[this.middle];
    }

    lower() {
        this.arr = this.arr.splice(0, this.middle);
    }

    greater() {
        this.arr = this.arr.splice(this.middle, this.arr.length)
    }
}

module.exports = GuessingGame;
