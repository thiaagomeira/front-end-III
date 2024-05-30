import React from 'react'

const Aluno = ({ nome, email, curso}) => {
  return (
    <>
      <h2>{nome}</h2>
      <p>Email: {email}</p>
      <p>Curso: {curso}</p>      
    </>
  );
};

export default Aluno