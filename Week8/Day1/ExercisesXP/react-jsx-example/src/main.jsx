import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';  
import './style.css';  // global styles

// Render App component DOM element id "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




