import {useState, useEffect} from 'react';

import "./Todoapp.css";

const TodoApp = () => {
 // Lista de Tarefas
 const [todos, setTodos] = useState(() => {
    const todosSalvos = localStorage.getItem("todos");
    return todosSalvos ? JSON.parse(todosSalvos) : []});

 // Estado de texto da tarefa
 const [inputValue, setInputValue] = useState ("");

 useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

 // Adicionar tarefa
 const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim() !== '') {
        const newTodo = {
            id: Date.now(),
            text: inputValue,
        }

        setTodos((prevTodos) => [...prevTodos, newTodo]);

        setInputValue ("");
    };
 };

  const handleDelete = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

 
    return (
    <div className='app'>
        <h1 className='titulo'>Lista de Tarefas</h1>

        {/* Formulário para adicionar tarefas */}
        <form onSubmit={handleSubmit} className='formulario'>  
            <input type="text" placeholder='Adicione uma tarefa...' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button type='submit' className='adicionar'>Adicionar</button>
        </form>

        {/* Lista de Tarefas */}
        {todos.length === 0 && <p className='texto'>Não há Tarefas</p>}

        <ul className='lista'>
            {todos.map((todo) => (
                <li key={todo.id} className='todo-item'>{todo.text}
                    <button className='excluir' onClick={() => handleDelete(todo.id)}>Excluir</button>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default TodoApp;