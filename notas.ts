export class Notas{
    notas: string;

    constructor(notas:string){
        this.notas = notas;
    }

 //SETTER
 
    set setNotas_(notas: string){
        this.notas = notas;
    }

//GETTER

    get getNotas_(): string {
        return this.notas;
    }
}