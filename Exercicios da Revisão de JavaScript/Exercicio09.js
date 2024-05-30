class Pessoa {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }

  exibirInfo() {
    const infoString = `Nome: ${this.nome}, Idade: ${this.idade}, Profissao: ${this.profissao}`;
    
    const infoOutput = document.getElementById("infoOutput");
    infoOutput.innerHTML = infoString;
  }
}

const pessoaExemplo = new Pessoa("Thiago Meira", 35, "Médico Veterinário");

pessoaExemplo.exibirInfo();