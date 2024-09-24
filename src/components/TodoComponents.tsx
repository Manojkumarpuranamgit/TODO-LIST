import React, { useState } from 'react';
import '../styles/TodoList.css'; // Adjust if the path is different

interface Todo {
  id: number;
  text: string;
  date: string;
  showDelete: boolean;
}

const TodoComponents: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [dateValue, setDateValue] = useState<string>('')

  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

 
  const addTodo = () => {
    if (inputValue.trim() && dateValue) {
      // Add date property when creating a new todo
      const formattedDate = formatDate(dateValue);
      const newTodo: Todo = { 
        id: Date.now(), 
        text: inputValue, 
        date: formattedDate, 
        showDelete: false // Initially set to false
      };

      setTodos([...todos, newTodo]);
      setInputValue('');
      setDateValue(''); // Reset date input after adding
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleShowDelete = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, showDelete: !todo.showDelete } : todo
      )
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
         <input
          type="date"
          value={dateValue}
          onChange={(e) => setDateValue(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.showDelete}
              onChange={() => toggleShowDelete(todo.id)}
            />
            {todo.text} - <span>{todo.date}</span>
            {/* Conditionally render delete SVG based on checkbox status */}
            {todo.showDelete && (
              <span onClick={() => removeTodo(todo.id)} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="24px" height="24px">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-4.5l-1-1zM18 8H6v11c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8z"/>
                </svg>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponents;
