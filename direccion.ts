export class Direccion{
    public calle: string;
    public numero: number;
    public piso: number;
    public letra: string;
    public codigoPostal: number;
    public poblacion: string;
    public provincia: string;

    constructor(calle:string, numero:number, piso:number, letra: string, codigoPostal:number, poblacion:string, provincia:string) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;

    }

//SETTERS

    set setCalleDireccion(calle: string){
        this.calle = calle;
    }
    set setNumeroDireccion(numero: number){
        this.numero = numero;
    }
    set setPisoDireccion(piso: number){
        this.piso = piso;
    }
    set setLetraDireccion(letra: string){
        this.letra = letra;
    }
    set setCodigoPostalDireccion(codigoPostal: number){
        this.codigoPostal = codigoPostal;
    }
    set setPoblacionDireccion(poblacion: string){
        this.poblacion = poblacion;
    }
    set setProvinciaDireccion(provincia: string){
        this.provincia = provincia;
    }

//GETTERS

    get getCalleDireccion(): string {
        return this.calle;
    }
    get getNumeroDireccion(): number {
        return this.numero;
    }
    get getPisoDireccion(): number {
        return this.piso;
    }
    get getLetraDireccion(): string {
        return this.letra;
    }
    get getCodigoPostalDireccion(): number {
        return this.codigoPostal;
    }
    get getPoblacionDireccion(): string {
        return this.poblacion;
    }
    get getProvinciaDireccion(): string {
        return this.provincia;
    }
}