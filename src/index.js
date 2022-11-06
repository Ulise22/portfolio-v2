import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LangProvider } from './components/context/langContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LangProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LangProvider>
);