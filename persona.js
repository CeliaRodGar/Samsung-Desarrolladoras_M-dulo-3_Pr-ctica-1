"use strict";
/*INSTRUCCIONES.
    -> Se creará un módulo principal (main) en el que se utilicen las clases definidas para crear 3 registros de persona y mostrarlos en el terminal mediante console.log., utilizando las funciones necesarias definidas en las clases para obtener los datos.
    -> Se modificará uno de los registros de persona añadidos, realizando la búsqueda por DNI y añadiendo una nueva dirección, un nuevo mail y un nuevo teléfono. Estos cambios se deben realizar mediante el uso de métodos definidos previamente en las clases.
    -> Se mostrarán desde el módulo principal los 3 registros con los cambios realizados anteriormente en la consola.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    Object.defineProperty(Persona.prototype, "setNombre", {
        //SETTERS
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setApellidos", {
        set: function (apellidos) {
            this.apellidos = apellidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setEdad", {
        set: function (edad) {
            this.edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setDni", {
        set: function (dni) {
            this.dni = dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setCumplea\u00F1os", {
        set: function (cumpleaños) {
            this.cumpleaños = cumpleaños;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setColorFavorito", {
        set: function (colorFavorito) {
            this.colorFavorito = colorFavorito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setSexo", {
        set: function (sexo) {
            this.sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setDirecciones", {
        set: function (direcciones) {
            this.direcciones = direcciones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setMails", {
        set: function (mails) {
            this.mails = mails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setTelefonos", {
        set: function (telefonos) {
            this.telefonos = telefonos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setNotas", {
        set: function (notas) {
            this.notas = notas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getNombre", {
        //GETTERS
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getApellidos", {
        get: function () {
            return this.apellidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getEdad", {
        get: function () {
            return this.edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getDni", {
        get: function () {
            return this.cumpleaños;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getCumplea\u00F1os", {
        get: function () {
            return this.cumpleaños;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getColorFavorito", {
        get: function () {
            return this.colorFavorito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getSexo", {
        get: function () {
            return this.sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getDirecciones", {
        get: function () {
            return this.direcciones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getMails", {
        get: function () {
            return this.mails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getTelefonos", {
        get: function () {
            return this.telefonos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getNotas", {
        get: function () {
            return this.notas;
        },
        enumerable: false,
        configurable: true
    });
    //PARA AÑADIR NUEVOS DATOS
    Persona.prototype.AñadirDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.AñadirMail = function (mail) {
        this.mails.push(mail);
    };
    Persona.prototype.AñadirTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    return Persona;
}());
exports.Persona = Persona;
