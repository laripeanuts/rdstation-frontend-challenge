import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { QueryClientProvider } from './providers/QueryClientProvider';
import reportWebVitals from './reportWebVitals';

import './styles/globals.css';
import './styles/tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
