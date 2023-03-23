import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { App } from 'components/App1/App1';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <App /> */}
  </React.StrictMode>
);