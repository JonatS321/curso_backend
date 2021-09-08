"use strict";
exports.__esModule = true;
exports.Sumar = void 0;
var Sumar = /** @class */ (function () {
    function Sumar(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Sumar.prototype.resultado = function () {
        return this.num1 + this.num2;
    };
    return Sumar;
}());
exports.Sumar = Sumar;
