import React, { useState } from 'react';

function HookContador() {
  const [count, setCount] = useState(1); 

  const handleClick = () => {
    setCount(count +1);
  }

  return (
    <div>
      <h1>Contador com useState</h1>
      <button onClick={() => setCount(count + 1)}>
          Clique aqui
      </button>  
      <h2>O contador está em: {count}</h2>
      
    </div>
  );
}

export default HookContador;
