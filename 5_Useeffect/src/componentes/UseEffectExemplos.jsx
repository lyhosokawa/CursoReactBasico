import {useState, useEffect} from 'react'

const UseEffectExemplos = () => {
  
  // sem depêndencias 
  useEffect (() => {
    console.log("Rodou useEffect 1");
  });

  // com depêndencias vazias / array dep. vazio
  useEffect (() => {
    console.log("Rodou useEffect 2");
  }, []);

  // useState ativa a re-renderização
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // com depêndencias 
  useEffect (() => {
    console.log("Rodou useEffect 3")
  }, [count, count2]);

  return (
    <div>
      <p>{count}</p>
      <p>{count2}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar Contagem</button>
      <button onClick={() => setCount2(count2 + 1)}>Aumentar Contagem</button>
    </div>
  );
};

export default UseEffectExemplos;