# Sistema de Gerenciamento de Biblioteca

## Descrição

Sistema desenvolvido para a disciplina de Linguagens de Programação com o objetivo de integrar os paradigmas de Programação Orientada a Objetos (POO) e Programação Funcional (PF).

O sistema permite gerenciar livros, usuários e empréstimos de uma biblioteca universitária, além de calcular multas por atraso e apresentar estatísticas.

---

## Tecnologias Utilizadas

- JavaScript (ES6 Modules)
- HTML5
- CSS3

---

## Funcionalidades

### Livros
- Cadastrar livros
- Listar livros cadastrados
- Consulta por categoria

### Usuários
- Cadastrar usuários
- Listar usuários cadastrados

### Empréstimos
- Registrar empréstimos
- Registrar devoluções
- Verificar disponibilidade dos livros
- Impedir empréstimos duplicados do mesmo livro

### Multas
- Identificar empréstimos atrasados
- Calcular multas automaticamente
- Exibir relatório de multas
- Exibir valor total das multas

### Estatísticas
- Quantidade de livros por categoria
- Quantidade de empréstimos ativos
- Quantidade de empréstimos atrasados

---

## Estrutura do Projeto

```text
Sistema de Gerenciamento de Biblioteca
│
├── index.html
├── style.css
├── index.js
├── biblioteca.js
├── livro.js
├── usuario.js
├── emprestimo.js
├── funcoes.js
└── package.json
```

---

## Classes Utilizadas

### Livro

Representa um livro do acervo.

Atributos:
- id
- titulo
- autor
- categoria
- disponivel

### Usuario

Representa um usuário da biblioteca.

Atributos:
- id
- nome
- matricula

### Emprestimo

Representa um empréstimo realizado.

Atributos:
- id
- livro
- usuario
- dataemprestimo
- dataprevistadedevolucao
- datadedevolucao

### Biblioteca

Responsável pelo gerenciamento do sistema.

Funcionalidades:
- Cadastro de livros
- Cadastro de usuários
- Registro de empréstimos
- Registro de devoluções
- Consulta de dados

---

## Conceitos de Programação Funcional Utilizados

### Filter

Utilizado para:

- Obter empréstimos atrasados
- Contar empréstimos ativos

### Map

Utilizado para:

- Listar títulos dos livros
- Gerar informações para o relatório de multas

### Reduce

Utilizado para:

- Contar livros por categoria
- Somar o valor total das multas

### Funções Puras

Exemplos:

- calcularmulta()
- obteremprestimosatrasados()
- listartitulosdelivros()
- quantidadedelivrosporcategoria()

### Imutabilidade

As operações funcionais utilizam map, filter e reduce sem modificar as coleções originais.

---

## Comparação entre Paradigmas

A funcionalidade de contagem de empréstimos ativos foi implementada de duas maneiras:

### Imperativa

Utilizando laços de repetição e variável acumuladora.

### Funcional

Utilizando filter() para selecionar os empréstimos ativos.

Ambas produzem o mesmo resultado.

---

## Como Executar

### Opção 1 - Navegador

1. Abra o projeto no Visual Studio Code.
2. Instale a extensão Live Server.
3. Clique com o botão direito em `index.html`.
4. Selecione **Open with Live Server**.

### Opção 2 - Terminal

Execute:

```bash
node index.js
```

---

## Integrantes

- joão carlos silva de souza

---

## Autor

João carlos silva de souza

Projeto desenvolvido para fins acadêmicos na disciplina de Linguagens de Programação.