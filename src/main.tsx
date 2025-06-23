import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onRegistered(r) {
    console.log('Service worker registered:', r);
  },
  onOfflineReady() {
    console.log('App is ready to work offline');
  }
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);