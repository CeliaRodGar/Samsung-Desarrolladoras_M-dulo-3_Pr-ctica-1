export class Mail{
    tipo:string;
    direccion:string;

    constructor(tipo:string, direccion:string){
        this.tipo = tipo;
        this.direccion = direccion;
    }

     //SETTERS

    set setTipoMail(tipo: string){
        this.tipo = tipo;
    }
    set setDireccionMail(direccion: string){
        this.direccion = direccion;
    }

    //GETTERS
    
    get getTipoMail(): string {
        return this.tipo;
    }
    get getDireccionMail(): string {
        return this.direccion;
    }
}
