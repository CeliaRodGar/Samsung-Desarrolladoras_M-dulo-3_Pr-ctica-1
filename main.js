"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var telefono_1 = require("./telefono");
var mail_1 = require("./mail");
var direccion_1 = require("./direccion");
var notas_1 = require("./notas");
//VARIABLES PARA PERSONA 1
var Mail1 = new mail_1.Mail("Casa", "Avenida de las Ciencias");
var Telefono1 = new telefono_1.Telefono("Fijo", 777888999);
var Direccion1 = new direccion_1.Direccion("Amador de los Ríos", 6, 2, "J", 23896, "Córdoba", "Córdoba");
var Notas1 = new notas_1.Notas("Este contacto está actualizado");
//VARIABLES PARA PERSONA 2
var Mail2 = new mail_1.Mail("Trabajo", "Calle de las Ardillas");
var Telefono2 = new telefono_1.Telefono("Móvil", 444555666);
var Direccion2 = new direccion_1.Direccion("Arroyo", 9, 5, "K", 15768, "Huelva", "Huelva");
var Notas2 = new notas_1.Notas("Este contacto debe actualizar sus datos");
//VARIABLES PARA PERSONA 3
var Mail3 = new mail_1.Mail("Casa", "Avenida de los Dulces");
var Telefono3 = new telefono_1.Telefono("Fijo", 111222333);
var Direccion3 = new direccion_1.Direccion("Los Polancos", 4, 3, "H", 434444, "Málaga", "Málaga");
var Notas3 = new notas_1.Notas("Este contacto no está actualizado");
//VARIABLES PARA NUEVOS DATOS DE PERSONA 3
var MailNuevo = new mail_1.Mail("Trabajo", "Ronda de Capuchinos");
var TelefonoNuevo = new telefono_1.Telefono("Móvil", 333999000);
var DireccionNueva = new direccion_1.Direccion("Parque de Doñana", 7, 1, "D", 99302, "Sevilla", "Sevilla");
var NotasNuevas = new notas_1.Notas("Este contacto ha modificado sus datos recientemente");
//CREACIÓN DE 3 REGISTROS DE PERSONA
var persona1 = new persona_1.Persona("Merchi", "Becerra", 52, "27307773N", "13/08/1971", "Verde", "Mujer", [Direccion1], [Mail1], [Telefono1], [Notas1]);
var persona2 = new persona_1.Persona("Pedro", "Martínez", 27, "273011113N", "23/09/1995", "Amarillo", "Hombre", [Direccion2], [Mail2], [Telefono2], [Notas2]);
var persona3 = new persona_1.Persona("Pili", "Sánchez", 19, "273022222N", "18/05/1995", "Rosa", "Mujer", [Direccion3], [Mail3], [Telefono3], [Notas3]);
//FUNCIÓN PARA IDENTIFICAR REGISTRO DE PERSONA MEDIANTE DNI
var agenda = new Array(persona1, persona2, persona3);
var dniABuscar = "273022222N";
var personaAEditar = agenda.find(function (persona) { return persona.dni === dniABuscar; });
//CONSOLE.LOG PARA VER LOS DATOS ANTES DE LOS CAMBIOS
console.log(persona1);
console.log(persona2);
console.log(persona3);
//FUNCIÓN PARA MODIFICAR LOS DATOS DE LA PERSONA LOCALIZADA MEDIANTE DNI
personaAEditar.AñadirDireccion(DireccionNueva);
personaAEditar.AñadirMail(MailNuevo);
personaAEditar.AñadirTelefono(TelefonoNuevo);
//CONSOLE.LOG PARA VER LOS DATOS DESPUÉS DE LOS CAMBIOS
console.log("DATOS MODIFICADOS");
console.log(personaAEditar);
