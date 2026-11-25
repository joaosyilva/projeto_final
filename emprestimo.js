import{livro} from './livro.js';
import{usuario} from './usuario.js';


export class emprestimo{

    constructor(id, livro, usuario, dataemprestimo, dataprevistadedevolucao){

        this.id = id;
        this.livro = livro;
        this.usuario = usuario;
        this.dataemprestimo = dataemprestimo;
        this.dataprevistadedevolucao = dataprevistadedevolucao;
        this.datadedevolucao = null;
    }

    obterid(){
        return this.id;
    }

    obterlivro(){
        return this.livro;
    }

    obterusuario(){
        return this.usuario;
    }

    obterdataemprestimo(){
        return this.dataemprestimo;
    }

    obterdataprevistadedevolucao(){
        return this.dataprevistadedevolucao;
    }

    obterdatadedevolucao(){
        return this.datadedevolucao;
    }

    estaativo(){
        return this.datadedevolucao === null;
    }

    registrardevolucao(data){
        this.datadedevolucao = data;
        this.livro.devolver();
    }

    

}