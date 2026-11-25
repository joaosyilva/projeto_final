import {emprestimo} from "./emprestimo.js";



export class biblioteca{

    constructor() {


    this.livros = [];
    this.usuarios = [];
    this.emprestimos = [];

}


cadastrarlivro(livro){
    this.livros.push(livro);
}

cadastrarusuarios(usuarios){
    this.usuarios.push(usuarios);
}


registraremprestimo(emprestimo){

    const livro = emprestimo.obterlivro();

    if(!livro.estadisponivel()){throw new Error("livro indisponivel");}

    livro.emprestar();
    this.emprestimos.push(emprestimo);
}







listalivros(){
    return this.livros;
}

listausuarios(){
    return this.usuarios;
}

listaemprestimos(){
    return this.emprestimos;
}









registrardevolucao(idemprestimo, data){
    const emprestimo = this.emprestimos.find(emprestimo => emprestimo.obterid() === idemprestimo);

    if(!emprestimo){
        throw new Error("emprestimo não encontrado");

    }

    emprestimo.registrardevolucao(data);

}

obterlivroporid(id){
    return this.livros.find(
        livro => livro.obterid() === id
    );
}

obterusuarioporid(id){
    return this.usuarios.find(
        usuario => usuario.obterid() === id
    );
}

obteremprestimoporid(id){
    return this.emprestimos.find(
        emprestimo => emprestimo.obterid() === id
    );
}


realizaremprestimo(
    idemprestimo,idlivro,idusuario,dataemprestimo,dataprevista){

        
    const livro = this.obterlivroporid(idlivro);
    const usuario = this.obterusuarioporid(idusuario);

    if(!livro){
        throw new Error("Livro não encontrado");
    }

    if(!usuario){
        throw new Error("Usuário não encontrado");
    }

    const novoemprestimo = new emprestimo(
        idemprestimo,
        livro,
        usuario,
        dataemprestimo,
        dataprevista
    );

    this.registraremprestimo(novoemprestimo);

    return novoemprestimo;
}



}

