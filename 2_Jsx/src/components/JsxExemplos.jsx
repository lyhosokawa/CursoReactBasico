import React from 'react'

const name = "Lucas"

const user = {
    nome: "Jonathan",
    ultimoNome: "Calleri",
}


const JsxExemplos = () => {

    const Username = "Lucas"

    const user = {
    nome: "Jonathan",
    ultimoNome: "Calleri",
    }

    const userIsLoggedin = true;

    const userRole = "admin";

    function getGreeting(name) {
        return `Ola ${name}`;
    }

    const users = [
        {id: 1, name:"Luciano"},
        {id: 2, name:"Enzo"},
        {id: 3, name:"Danielzinho"},
    ]
    
  return (
    <div>
        <h2>O conteudo que o usuário vai ver</h2>
        {/* Listando dados do usuário */}
        <p>O nome do programador é {Username}</p>

        <p>Nome do usuário: {user.nome} {user.ultimoNome}</p>

        <p>{getGreeting(user.ultimoNome)}</p>

        {/* Diferenças do HTML */}
        <div className='html'>Diferenças do HTML</div>

        <div className="teste">OK</div>

        <button onClick={() => alert('teste')}>Clique aqui</button>

        <input type="text" placeholder='Digite aqui' />

        {/* Renderização Condicional  */}
        {userIsLoggedin ? (
        <div>
            <p>Está Logado</p>
        </div> 
        ) : (
            <p>Não está logado</p>
        )}

        <p>
            {userRole === "admin" && <p>Vôce é um administrador</p>}
        </p>
        {/* Renderização de Listas */}
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.id} - {user.name}</li>
                ))}
            </ul>
        </div>

    </div>
    );  
};

export default JsxExemplos;