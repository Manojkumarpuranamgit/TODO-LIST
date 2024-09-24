import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Ensure you create this file or adjust as necessary
import App from './App'; // Import your App component

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
