import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component

const rootElement = document.getElementById('root');

// Use the createRoot API to render your app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
