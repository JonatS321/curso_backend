"use strict";
exports.__esModule = true;
exports.Dividir = void 0;
var Dividir = /** @class */ (function () {
    function Dividir(num1, num2) {
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
    Dividir.prototype.resultado = function () {
        return this.num1 / this.num2;
    };
    return Dividir;
}());
exports.Dividir = Dividir;
