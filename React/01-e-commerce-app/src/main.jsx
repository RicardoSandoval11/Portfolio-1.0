import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ECommercerApp } from './ECommercerApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ECommercerApp />
    </React.StrictMode>
  </BrowserRouter>
)
