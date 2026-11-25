export class usuario{

    constructor (id, nome, matricula){

        this.id = id;
        this.nome = nome;
        this.matricula = matricula;

    }

    obterid(){
        return this.id;
    }

    obternome(){
        return this.nome;
    }

    obtermatricula(){
        return this.matricula;
    }

}
