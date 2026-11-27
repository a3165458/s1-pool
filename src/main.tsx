import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/aeroultra.css';
import './i18n';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new TypeError('index.html has no #root element to mount into');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
