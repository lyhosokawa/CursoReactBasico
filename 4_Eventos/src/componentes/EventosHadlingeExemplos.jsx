import {useState} from 'react'

const EventosHadlingeExemplos = () => {
  
    const handleClick = () => {
        alert("Testando");
    };

    const handleGreet = (name) => {
        alert(`Olá ${name}`);
    };

    const [name, setName] = useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`enviado! ${name}`);
    };

    return (
    <div>
        <button onClick={()=> alert("oi")}>Clique aqui</button>
        <button onClick={handleClick}>Clique AQUI</button>
        <br />
        <button onClick={() => handleGreet("Lucas")}>Dizer olá Lucas</button>
        <button onClick={() => handleGreet("Lucigol")}>Dizer olá Lucigol</button>
        <br />
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Digite seu nome'/>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  );
};

export default EventosHadlingeExemplos