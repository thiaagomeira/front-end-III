---

# Uniesp: Front-end III
Este repositório é dedicado à disciplina Front-end III do curso de Sistemas para Internet da universidade Uniesp, onde utilizamos JavaScript e a biblioteca React.

## Atividades Revisão JavaScript:
Antes de iniciar as aulas de React, foi passada uma lista de exercícios de revisão sobre JavaScript, focando em tópicos essenciais para o desenvolvimento front-end.

## Exercício 01:
### Temas abordados:
- Tipos de dados Primitivos:
- String
- Boolean
- Null
- Undefined

### Exercício:
Faça um script que tenha três variáveis:
- var nome
- let sobreNome
- const cpf
- nome e cpf devem estar em um escopo global
- sobreNome deve estar dentro de uma função

- A execução do programa deve imprimir o nome completo na ordem correta (com quebra de linha):
- Nome
- Sobrenome
- CPF

## Exercício 02:
### Temas abordados:
- Tipos de Dados Objetos:
- Arrays
- Funções
- Objetos Regulares
- Objetos de Data

### Exercício:
Faça um script que contenha uma função: objetivoDaDisciplina(tecnologia)
- A função deve retornar a string: “Meu objetivo é aprender [parametro tecnologia]”
- Fora da função defina uma const tecnologia que possua o valor “React”.
- Chame a execução da função para que a mesma retorne: “Meu objetivo é aprender React”

## Exercício 03:
### Temas abordados:
- Function e Arrow Function

### Exercício:
Faça um script que contenha uma função (ARROW FUNCTION): objetivoDaDisciplina(tecnologia)
- A função deve retornar a string: “Meu objetivo é aprender [parâmetro tecnologia]”
- Fora da função defina uma const tecnologia que possua o valor “React”.
- Chame a execução da função para que a mesma retorne: “Meu objetivo é aprender React”

## Exercício 04:
### Temas abordados:
- Manipulando Arrays, lenght, push, pop, shift e unshift.

### Exercício:
Faça um script que contenha um array chamado notas, esse array armazena 3 notas de um aluno.
- O programa deve imprimir:
  • A primeira nota do aluno é:
  • A segunda nota do aluno é:
  • A terceira nota do aluno é:
  • A média do aluno é:
OBS: Cálculo da média: (soma das notas)/quantidade de notas.

## Exercício 05:
### Temas abordados:
- Objetos
- Operadores
- Condicionais

### Exercício:
Faça um script que contenha um array chamado notas, esse array armazena 3 notas de um aluno.
- O programa deve imprimir:
  • A primeira nota do aluno é:
  • A segunda nota do aluno é:
  • A terceira nota do aluno é:
  • A média do aluno é:
  • O aluno está: APROVADO ou REPROVADO
  • APROVADO QUANDO A MÉDIA FOR MAIOR OU IGUAL A 7
OBS: Cálculo da média: (soma das notas)/quantidade de notas.

## Exercício 06:
### Temas abordados:
- Loop: For e While

### Exercício0:
Escreva um programa que imprima os números de 1 a 100. Mas, para múltiplos de 3, imprima "Fizz" em vez do número e, para múltiplos de 5, imprima "Buzz". Para números que são múltiplos de ambos 3 e 5, imprima "FizzBuzz".

## Exercício 07:
### Temas abordados:
- Manipulação de DOM.

### Exercício:
Suponha que temos a seguinte página HTML. Crie um script em JS (no arquivo script.js) que tenha uma função “mudaTexto()”, ela deve ser responsável por mudar o texto do elemento "<h1>" para “Novo Título” quando o botão for clicado. 
- Dica: para selecionar o elemento você pode utilizar document.getElementById(“id-do-ele mento”)
- Com esse elemento selecionado você pode mudar o texto: variavelQueSelecionouOElemento = innerText = “Novo Título”

## Exercício 08:
### Temas abordados:
- Eventos em JS.

### Exercício:
Escreva um html que contenha um botão “Clique aqui”. 
Dentro desse HTML inicialize um “<script> ... </script>” que contenha um script em JS que receba esse elemento do botão em uma váriavel, e logo após implemente um “ouvinte” com essa variável para exibir o alert “Botão clicado!”
  - alert(“Botão clicado!”);

## Exercício 09:
### Temas abordados:
- Orientação a Objetos.
  • Encapsulamento
  • Herança
  • Polimorfismo

### Exercício:
Faça uma classe, em JS, “Pessoa” que possua as propriedades: nome, idade e profissao.
- Esta classe vai possuir o método
  • “exibirInfo()” que vai printar:
- Nome: ..., Idade: ..., Profissao: ...
- Fora da classe crie um objeto Pessoa em uma variável.
- Chame o método exibirInfo() através do seu novo objeto.

## Exercício Dobrando os Números:
### Temas abordados:
- Arrays
- Funções
- Método map
- Constantes
- Manipulação de Arrays

### Exercício:
Escreva uma função em JavaScript que utilize a função map para dobrar os valores de uma lista de números.Descrição:
- Você tem uma lista de números: [1, 2, 3, 4, 5].
- Sua tarefa é escrever uma função que utilize a função map para iterar sobre esta lista e dobrar cada número.
- A função deve retornar a nova lista com os números dobrados.

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
