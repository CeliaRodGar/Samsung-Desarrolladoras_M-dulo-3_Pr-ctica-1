/*INSTRUCCIONES.
    -> Se creará un módulo principal (main) en el que se utilicen las clases definidas para crear 3 registros de persona y mostrarlos en el terminal mediante console.log., utilizando las funciones necesarias definidas en las clases para obtener los datos.
    -> Se modificará uno de los registros de persona añadidos, realizando la búsqueda por DNI y añadiendo una nueva dirección, un nuevo mail y un nuevo teléfono. Estos cambios se deben realizar mediante el uso de métodos definidos previamente en las clases.
    -> Se mostrarán desde el módulo principal los 3 registros con los cambios realizados anteriormente en la consola.*/

    import { Direccion } from "./direccion";
    import { Mail } from "./mail";
    import { Telefono } from "./telefono";
    import { Notas } from "./notas";


    export class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    cumpleaños: string;
    colorFavorito: string;
    sexo: string;
    direcciones: Direccion[];
    mails: Mail[];
    telefonos: Telefono[];
    notas: Notas[];
        constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: string, colorFavorito: string, sexo:string, direcciones:Direccion[], mails:Mail[], telefonos:Telefono[], notas:Notas[]){
        
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

    //SETTERS

    set setNombre(nombre: string){
        this.nombre = nombre;
    }
    set setApellidos(apellidos: string){
        this.apellidos = apellidos;
    }
    set setEdad(edad: number){
        this.edad = edad;
    }
    set setDni(dni: string){
        this.dni = dni;
    }
    set setCumpleaños(cumpleaños: string){
        this.cumpleaños = cumpleaños;
    }
    set setColorFavorito(colorFavorito: string){
        this.colorFavorito = colorFavorito;
    }
    set setSexo(sexo: string){
        this.sexo = sexo;
    }
    set setDirecciones(direcciones: Direccion[]){
        this.direcciones = direcciones;
    }
    set setMails(mails:Mail[]){
        this.mails = mails;
    }
    set setTelefonos(telefonos: Telefono[]){
        this.telefonos = telefonos;
    }
    set setNotas(notas: Notas[]){
        this.notas = notas;
    }
    
    //GETTERS

    get getNombre(): string {
        return this.nombre;
    }
    get getApellidos(): string {
        return this.apellidos;
    }
    get getEdad(): number {
        return this.edad;
    }
    get getDni(): string {
        return this.cumpleaños;
    }
    get getCumpleaños(): string {
        return this.cumpleaños;
    }
    get getColorFavorito(): string {
        return this.colorFavorito;
    }
    get getSexo(): string {
        return this.sexo;
    }
    get getDirecciones(): Direccion[]{
        return this.direcciones;
    }
    get getMails(): Mail[]{
        return this.mails;
    }
    get getTelefonos(): Telefono[]{
        return this.telefonos;
    }
    get getNotas(): Notas[]{
        return this.notas;
    }

    //PARA AÑADIR NUEVOS DATOS
    
    public AñadirDireccion(direccion : Direccion): void {
        this.direcciones.push(direccion);
    }
    public AñadirMail(mail : Mail): void {
        this.mails.push(mail);
    }
    public AñadirTelefono(telefono : Telefono): void {
        this.telefonos.push(telefono);
    }
    }










    