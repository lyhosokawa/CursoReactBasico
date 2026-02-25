import {useState} from 'react';

// useState = hooks
// Quando tiver que alterar algum valor usar o = useState

const UseStateComponents = () => {
    // Variavel de consulta, e variavel de alteração, inicia o hook
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    //  setCount(count + 1);
    console.log(count);
  }
  
  // Atualização do objeto exemplo

  const [user, setUser] = useState ({
    name: "Natalia",
    age: 24,
    hobbies: ["Estudar", "Assistir filmes"],
  });

  const updateUserAge = () => {
    setUser ((prevUser) => ({
        ...prevUser,
        age: prevUser.age + 1,
    }));
  }
    // Final da parte da atualização do objeto
    

    return (    
    <div>
        <h2>Contador</h2>
        <p>Você ciclou {count} vezes</p>
        <button onClick={increment}>Incrementar</button>
        
        <p>Nome: {user.name} e idade: {user.age}</p>
        <button onClick={updateUserAge}>Incrementar Idade</button>
    </div>
 );
};

export default UseStateComponents;