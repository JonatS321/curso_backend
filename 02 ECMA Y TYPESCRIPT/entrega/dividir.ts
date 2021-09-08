class Dividir {
    private num1: number;
    private num2: number;
    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    // resultado() {
		// if (this.num2 !== 0){
		// 	return this.num1 / this.num2;
		// }
		// else {
		// 	return new Error("NO DIVISIBLE")
		// }
    // }
    resultado() {
      return this.num1/this.num2;
    }
}

export {Dividir}
