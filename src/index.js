import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './input.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="flex flex-col min-h-screen">
      <App />
    </div>
  </React.StrictMode>
);