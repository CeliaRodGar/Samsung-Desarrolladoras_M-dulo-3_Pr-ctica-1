"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notas = void 0;
var Notas = /** @class */ (function () {
    function Notas(notas) {
        this.notas = notas;
    }
    Object.defineProperty(Notas.prototype, "setNotas_", {
        set: function (notas) {
            this.notas = notas;
        },
        enumerable: false,
        configurable: true
    });
    return Notas;
}());
exports.Notas = Notas;
