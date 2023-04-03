"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    Object.defineProperty(Direccion.prototype, "setCalleDireccion", {
        set: function (calle) {
            this.calle = calle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "setNumeroDireccion", {
        set: function (numero) {
            this.numero = numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "setPisoDireccion", {
        set: function (piso) {
            this.piso = piso;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "setLetraDireccion", {
        set: function (letra) {
            this.letra = letra;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "setCodigoPostalDireccion", {
        set: function (codigoPostal) {
            this.codigoPostal = codigoPostal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "setPoblacionDireccion", {
        set: function (poblacion) {
            this.poblacion = poblacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "setProvinciaDireccion", {
        set: function (provincia) {
            this.provincia = provincia;
        },
        enumerable: false,
        configurable: true
    });
    return Direccion;
}());
exports.Direccion = Direccion;
