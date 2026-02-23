import React from 'react'

const PropsExemplo = ({nome, anos}) => {
  return (
    <div>
        <h3>Olá, {nome}</h3>
        <p>Eu tenho {anos} anos.</p>
    </div>
  );
};

export default PropsExemplo