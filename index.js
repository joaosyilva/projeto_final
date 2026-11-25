import { livro } from './livro.js';
import { usuario } from './usuario.js';
import { emprestimo } from './emprestimo.js';
import { biblioteca } from './biblioteca.js';

import {
    quantidadeemprestimosativos,
    quantidadedeemprestimosatrasados,
    quantidadedelivrosporcategoria,
    obteremprestimosatrasados,
    calcularmulta,
    contarativosimperativo,
    listartitulosdelivros
} from './funcoes.js';

const bib = new biblioteca();



const livro1 = new livro(
    "clean code",
    1,
    "Robert c. martin",
    "tecnologia"
);

const livro2 = new livro(
    "JavaScript Moderno",
    2,
    "Autor Teste",
    "tecnologia"
);

const livro3 = new livro(
    "Dom Casmurro",
    3,
    "Machado de Assis",
    "literatura"
);

const usuario1 = new usuario(
    1,
    "joão",
    123456
);



bib.cadastrarlivro(livro1);
bib.cadastrarlivro(livro2);
bib.cadastrarlivro(livro3);
bib.cadastrarusuarios(usuario1);



console.log(bib.listalivros());
console.log(bib.listausuarios());


const emprestimo1 = new emprestimo(1, livro1, usuario1, new Date("2024-06-01"), new Date ("2024-06-15"));





bib.registraremprestimo(emprestimo1);
console.log(bib.listaemprestimos());
console.log(livro1.estadisponivel());




console.log(
    "Emprestimos ativos:",
    quantidadeemprestimosativos(
        bib.listaemprestimos()
    )
);

console.log(
    "Livros por categoria:",
    quantidadedelivrosporcategoria(
        bib.listalivros()
    )
);

console.log(
    "Emprestimos atrasados:",
    quantidadedeemprestimosatrasados(
        bib.listaemprestimos(),
        new Date()
    )
);

console.log(
    "Multa:",
    calcularmulta(
        new Date("2024-06-15")
    )
);

console.log(
    "Imperativo:",
    contarativosimperativo(
        bib.listaemprestimos()
    )
);

console.log(
    "Funcional:",
    quantidadeemprestimosativos(
        bib.listaemprestimos()
    )
);

console.log(
    "Funcional:",
    quantidadeemprestimosativos(
        bib.listaemprestimos()
    )
);

console.log(
    "Titulos dos livros:",
    listartitulosdelivros(
        bib.listalivros()
    )
);

atualizarListaLivros();
atualizarListaUsuarios();
atualizarListaEmprestimos();






function atualizarListaLivros() {

    const listaLivros =
        document.getElementById("lista-livros");

    listaLivros.innerHTML = "";

    bib.listalivros().forEach(livro => {

        listaLivros.innerHTML += `
        <p>
            ID: ${livro.obterid()}
            |
            Título: ${livro.obtertitulo()}
            |
            Autor: ${livro.obterautor()}
            |
            Categoria: ${livro.obtercategoria()}
        </p>
        `;
    });
}



atualizarListaLivros();
atualizarListaUsuarios();
atualizarListaEmprestimos();
atualizarRelatorioMultas();

const btnLivro = document.getElementById("btn-livro");

btnLivro.addEventListener("click", () => {

    const id = Number(
        document.getElementById("livro-id").value
    );

    const titulo =
        document.getElementById("livro-titulo").value;

    const autor =
        document.getElementById("livro-autor").value;

    const categoria =
        document.getElementById("livro-categoria").value;

    const novoLivro = new livro(
        titulo,
        id,
        autor,
        categoria
    );

    bib.cadastrarlivro(novoLivro);



    

atualizarListaLivros();


console.log("Livro cadastrado:");
console.log(bib.listalivros());

});





function atualizarListaUsuarios() {

    const listaUsuarios =
        document.getElementById("lista-usuarios");

    listaUsuarios.innerHTML = "";

    bib.listausuarios().forEach(usuario => {

        listaUsuarios.innerHTML += `
            <p>
                ID: ${usuario.obterid()}
                |
                Nome: ${usuario.obternome()}
                |
                Matrícula: ${usuario.obtermatricula()}
            </p>
        `;

    });
}

const btnUsuario =
    document.getElementById("btn-usuario");



    



    btnUsuario.addEventListener("click", () => {

    const id = Number(
        document.getElementById("usuario-id").value
    );

    const nome =
        document.getElementById("usuario-nome").value;

    const matricula = Number(
        document.getElementById("usuario-matricula").value
    );

    const novoUsuario = new usuario(
        id,
        nome,
        matricula
    );

    bib.cadastrarusuarios(novoUsuario);

    atualizarListaUsuarios();

    console.log("Usuário cadastrado:");
    console.log(bib.listausuarios());

});




function atualizarListaEmprestimos() {

    const listaEmprestimos =
        document.getElementById("lista-emprestimos");

    listaEmprestimos.innerHTML = "";

    bib.listaemprestimos().forEach(emprestimo => {

        listaEmprestimos.innerHTML += `
            <p>
                Empréstimo: ${emprestimo.obterid()}
                |
                Livro: ${emprestimo.obterlivro().obtertitulo()}
                |
                Usuário: ${emprestimo.obterusuario().obternome()}
            </p>
        `;

    });

}


const btnEmprestimo =
    document.getElementById("btn-emprestimo");



    btnEmprestimo.addEventListener("click", () => {

    const idEmprestimo = Number(
        document.getElementById("emprestimo-id").value
    );

    const idLivro = Number(
        document.getElementById("emprestimo-livro").value
    );

    const idUsuario = Number(
        document.getElementById("emprestimo-usuario").value
    );

    const dataPrevista = new Date(
        document.getElementById("data-prevista").value
    );

    bib.realizaremprestimo(
        idEmprestimo,
        idLivro,
        idUsuario,
        new Date(),
        dataPrevista
    );

    atualizarListaEmprestimos();
    atualizarRelatorioMultas();

    console.log("Empréstimo registrado!");
    console.log(bib.listaemprestimos());

});



   

const btnDevolucao =
    document.getElementById("btn-devolucao");

btnDevolucao.addEventListener("click", () => {

    const idEmprestimo = Number(
        document.getElementById("devolucao-id").value
    );

    bib.registrardevolucao(
        idEmprestimo,
        new Date()
    );

    atualizarListaEmprestimos();
    atualizarRelatorioMultas();

    console.log("Devolução registrada!");

});




function atualizarRelatorioMultas() {

    const divMultas =
        document.getElementById("relatorio-multas");

    const atrasados =
        obteremprestimosatrasados(
            bib.listaemprestimos(),
            new Date()
        );

        console.log("Atrasados:", atrasados);

    const multas = atrasados.map(
        emprestimo => {

            return {
                id: emprestimo.obterid(),
                livro:
                    emprestimo
                    .obterlivro()
                    .obtertitulo(),

                valor: calcularmulta(
                    emprestimo
                    .obterdataprevistadedevolucao()
                )
            };

        }
    );

    const total = multas.reduce(
        (soma, multa) => soma + multa.valor,
        0
    );

    divMultas.innerHTML = "";

    multas.forEach(multa => {

        divMultas.innerHTML += `
            <p>
                Empréstimo: ${multa.id}
                |
                Livro: ${multa.livro}
                |
                Multa: R$ ${multa.valor}
            </p>
        `;

    });

    divMultas.innerHTML += `
        <hr>
        <h3>Total das multas: R$ ${total}</h3>
    `;
}
