//Teléfono: tipo, número

export class Telefono {
    tipo: string;
    numero: number;

    constructor(tipo: string, numero: number){
   
    this.tipo = tipo;
    this.numero = numero;
}

 //SETTERS

set setTipotelefono(tipo: string){
    this.tipo = tipo;
}
set setNumeroTelefono(numero: number){
    this.numero = numero;
}

//GETTERS

get getTipoTelefono(): string {
    return this.tipo;
}
get getNumeroTelefono(): number {
    return this.numero;
}
}
