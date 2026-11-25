export function quantidadeemprestimosativos(emprestimos){

    return emprestimos.filter(emprestimo =>emprestimo.estaativo()).length;
}




export function obteremprestimosatrasados(emprestimos,datareferencia){

    return emprestimos.filter(
        emprestimo =>
            emprestimo.estaativo() &&
            emprestimo.obterdataprevistadedevolucao() < datareferencia
    );
}

export function quantidadedeemprestimosatrasados(emprestimos, datareferencia){

    return obteremprestimosatrasados(emprestimos, datareferencia).length;
} 



export function quantidadedelivrosporcategoria(livros){

    return livros.reduce((resultado, livro)=>{

        const categoria = livro.obtercategoria();

        resultado[categoria]= (resultado[categoria]||0) +1;

        return resultado;
    },{});
}


export function calcularmulta(dataprevista,dataatual = new Date()){

    const diferenca =
        dataatual - dataprevista;

    const diasatraso =
        Math.floor(
            diferenca /
            (1000 * 60 * 60 * 24)
        );

    if(diasatraso <= 0){
        return 0;
    }

    return diasatraso * 2;
}


export function contarativosimperativo(emprestimos){

    let contador = 0;

    for(const emprestimo of emprestimos){

        if(emprestimo.estaativo()){
            contador++;
        }

    }

    return contador;
}


export function listartitulosdelivros(livros){

    return livros.map(
        livro => livro.obtertitulo()
    );

}