import React, { useState } from 'react';

const HookMegaSena = () => {
  const [sorteado, setSorteado] = useState('');
  const [arrayNumerosSorteados, setArrayNumerosSorteados] = useState([]);

  const sortearNumero = () => {
    if (arrayNumerosSorteados.length < 6) {
      const novoSorteado = Math.floor(Math.random() * 60) + 1;
      setSorteado(novoSorteado);
      setArrayNumerosSorteados([...arrayNumerosSorteados, novoSorteado]);
    } else {
      alert('Já temos 6 números sorteados!');
    }
  };

  return (
    <div>
      <button onClick={sortearNumero}>Sortear Número</button>
      <p>Número sorteado: {sorteado}</p>
      <p>Números sorteados: {arrayNumerosSorteados.join(', ')}</p>
    </div>
  );
};

export default HookMegaSena;