import { Persona } from './persona';
import { Telefono } from './telefono';
import { Mail } from './mail';
import { Direccion } from './direccion';
import { Notas } from './notas';

//VARIABLES PARA PERSONA 1

var Mail1 = new Mail ("Casa", "Avenida de las Ciencias");
var Telefono1 = new Telefono("Fijo", 777888999);
var Direccion1 = new Direccion("Amador de los Ríos", 6, 2, "J", 23896, "Córdoba", "Córdoba");
var Notas1= new Notas("Este contacto está actualizado");

//VARIABLES PARA PERSONA 2

var Mail2 = new Mail ("Trabajo", "Calle de las Ardillas");
var Telefono2 = new Telefono("Móvil", 444555666);
var Direccion2 = new Direccion("Arroyo", 9, 5, "K", 15768, "Huelva", "Huelva");
var Notas2= new Notas("Este contacto debe actualizar sus datos");

//VARIABLES PARA PERSONA 3

var Mail3 = new Mail ("Casa", "Avenida de los Dulces");
var Telefono3 = new Telefono("Fijo", 111222333);
var Direccion3 = new Direccion("Los Polancos", 4, 3, "H", 434444, "Málaga", "Málaga");
var Notas3= new Notas("Este contacto se registró el 20/10/2021");

//VARIABLES PARA NUEVOS DATOS DE PERSONA 3

var MailNuevo = new Mail ("Trabajo", "Ronda de Capuchinos");
var TelefonoNuevo = new Telefono("Móvil", 333999000);
var DireccionNueva = new Direccion("Parque de Doñana", 7, 1, "D", 99302, "Sevilla", "Sevilla");


//CREACIÓN DE 3 REGISTROS DE PERSONA

const persona1 = new Persona("Merchi", "Becerra", 52, "27307773N", "13/08/1971", "Verde", "Mujer", [Direccion1], [Mail1], [Telefono1], [Notas1]);

const persona2 = new Persona("Pedro", "Martínez", 27, "273011113N", "23/09/1995", "Amarillo", "Hombre", [Direccion2], [Mail2], [Telefono2], [Notas2]);

const persona3 = new Persona("Pili", "Sánchez", 19, "273022222N", "18/05/1995", "Rosa", "Mujer", [Direccion3], [Mail3], [Telefono3], [Notas3]);

//FUNCIÓN PARA IDENTIFICAR REGISTRO DE PERSONA MEDIANTE DNI

const agenda: Array<Persona> = new Array(persona1, persona2, persona3);

const dniABuscar: string = "273022222N";

const personaAEditar: Persona = agenda.find(persona => persona.dni === dniABuscar) as Persona;

//CONSOLE.LOG PARA VER LOS DATOS ANTES DE LOS CAMBIOS

console.log (persona1);
console.log (persona2);
console.log (persona3);

//FUNCIÓN PARA MODIFICAR LOS DATOS DE LA PERSONA LOCALIZADA MEDIANTE DNI

personaAEditar.AñadirDireccion(DireccionNueva);
personaAEditar.AñadirMail(MailNuevo);
personaAEditar.AñadirTelefono(TelefonoNuevo);

//CONSOLE.LOG PARA VER LOS DATOS DESPUÉS DE LOS CAMBIOS

console.log("DATOS MODIFICADOS")
console.log (personaAEditar);




 