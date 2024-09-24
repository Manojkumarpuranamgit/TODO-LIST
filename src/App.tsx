import React from 'react';
import TodoList from './components/TodoComponents'; // Adjust the path as necessary

const App: React.FC = () => {
  return (
    <div className="App">
       <h1>
        Hi, Suchita Jain 
        <span 
          role="img" 
          aria-label="smiling face with starry eyes" 
          style={{ marginLeft: '8px', display: 'inline', verticalAlign: 'middle' }}
        >
           🤩
        </span>! <h4>nice to see you here again!</h4>
      </h1>
      <h2>
        What are the plans today?
        <span 
          role="img" 
          aria-label="winking face" 
          style={{ marginLeft: '8px', display: 'inline', verticalAlign: 'middle' }}
        >
          😉
        </span>
      </h2>
      <TodoList />
    </div>
  );
};

export default App;
