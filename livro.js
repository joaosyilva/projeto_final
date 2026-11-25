export class livro{

    constructor(titulo, id, autor, categoria){

        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.disponivel = true;
    }

    obterid(){
        return this.id;
    }


    obtertitulo(){
        return this.titulo;
    }

    obterautor(){
        return this.autor;
    }

    obtercategoria(){
        return this.categoria;
    }

    estadisponivel(){
        return this.disponivel;
    }

    emprestar(){
        this.disponivel = false;
    }

    devolver(){
        this.disponivel = true;
    }



}