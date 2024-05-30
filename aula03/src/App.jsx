import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>{
        [
        {nome: "Thiago", email: "thiago@iesp.edu.br", curso: "Sistemas para Internet" },
        {nome: "Sandra", email: "sandra@iesp.edu.br", curso: "Ciências da Computação" },
        {nome: "Pedro", email: "pedro@iesp.edu.br", curso: "Sistemas da Informação" }
        ].map((aluno) =>
            <Aluno nome={aluno.nome} curso={aluno.curso} email={aluno.email} />
        )
        }</div>
  )
}

export default App