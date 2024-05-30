---

# Uniesp: Front-end III
Este repositório é dedicado à disciplina Front-end III do curso de Sistemas para Internet da universidade Uniesp, onde utilizamos JavaScript e a biblioteca React.

## Revisão de JavaScript

Antes de iniciar as aulas de React, foi feita uma revisão sobre JavaScript, focando em tópicos essenciais para o desenvolvimento front-end. Os exercícios incluíram práticas de manipulação de DOM, funções, arrays e objetos, garantindo que todos tivessem uma base sólida para avançar nos estudos com React.

## Aula 00:
### Temas abordados:
- Conceitos de Node.js
- Gerenciamento de pacotes com o npm
- Criação de um projeto React com a ferramenta Vite

### Exercício:
Renderizar a mensagem: "Hello World"

## Aula 01:
### Temas abordados:
- Conceitos do .jsx
- Criação de componentes
- Trabalhando com propriedades de componentes

### Exercício:
Criar os componentes Adicao, Subtracao, Multiplicacao e Divisao, passar os operandos como parâmetros e renderizar os resultados correspondentes.

## Aula 02:
### Temas abordados:
- Eventos
- Imagens
- Hooks

### Exercícios:

#### Exercício 1:
Crie um componente chamado RenderizandoComFuncoes.

Neste componente, crie uma função chamada escolhaDeRenderizacao que terá um parâmetro chamado oQueRenderizar. Nessa função, se o valor de oQueRenderizar for a string “h1”, o retorno será um JSX com o texto “Texto em h1” envolto pela tag h1. Se a string for diferente de “h1”, o retorno será “Texto em h2” envolto pela tag h2. Na tela, chame essa função através de duas expressões template, uma passando “h1” como parâmetro e outra passando “h2”.

#### Exercício 2:
Crie um componente chamado TrabalhandoComImagens.

Neste componente, importe uma imagem da pasta public e uma da pasta assets. Importe o componente na App e renderize.

#### Exercício 3:
Crie um componente chamado HookContador.

Neste componente, utilize useState para criar um estado "contador" com valor inicial igual a 1. Crie uma função "incrementarContador" que incrementa o valor do contador em +1. Crie um botão "Incrementar" para utilizar a função e renderize o componente.

## Aula 03:
### Temas abordados:
- If/Else no JSX
- Props e destructuring de props
- Reutilização de componentes
- Fragments

### Exercícios:

#### Exercício 01:
Crie um componente chamado EstouConseguindoAprenderReact.

Neste componente, crie um operador ternário para verificar uma prop chamada estouConseguindo (boolean). Se true, exiba <h1>Estou indo bem...</h1>. Se false, exiba <h1>Preciso estudar mais</h1>.

#### Exercício 02:
Crie um componente chamado Aluno.

Este componente vai renderizar informações sobre o aluno, como nome, email, curso e média. Utilize a técnica de destructuring para extrair todas as propriedades de uma vez só. Renderize o componente Aluno em um elemento da página. Para isso, crie um array com 3 alunos em objetos literais. Percorra esse array através de .map para renderizar os 3 alunos na tela.

## Aula 04:
### Temas abordados:
- CSS com React

### Exercícios:

#### Exercício 01:
Crie um estilo global que contenha:
- Cor de fundo do corpo: #d77d7d
- Tamanho da fonte padrão: 50px
- Todas as imagens devem ter uma borda sólida de 20px com cor #ccc

#### Exercício 02:
CSS inline:
- Cor do texto: #f00
- Cor de fundo: #00f
- Largura: 200px
- Alinhamento centralizado

#### Exercício 03:
CSS modularizado:

Crie um CSS modularizado para um componente chamado Campanha. A mensagem e a cor de fundo devem mudar de acordo com o mês passado como prop.
