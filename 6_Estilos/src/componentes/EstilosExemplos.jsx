import React from 'react'
import './EstilosExemplos.css'
import styles from './EstilosExemplos.module.css'

const EstilosExemplos = () => {
  
  // inline 
  const inlineStyle = {
    color: "red",
    fontSize : "20px",

  }
  
    return (
    <div>
        <h2 style={inlineStyle}>Estilos Inline</h2>

        {/* Arquivo de estilos */}
        <p className="text">Css importado</p>

        {/* CSS modulos */}
        <p className={styles.textRoxo}>Css Modulos</p>
    </div>
  );
};

export default EstilosExemplos;