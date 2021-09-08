"use strict";
exports.__esModule = true;
exports.Multiplicar = void 0;
var Multiplicar = /** @class */ (function () {
    function Multiplicar(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Multiplicar.prototype.resultado = function () {
        return this.num1 * this.num2;
    };
    return Multiplicar;
}());
exports.Multiplicar = Multiplicar;
