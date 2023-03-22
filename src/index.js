import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import miApp from './miApp/miApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const el1 = ReactDOM.createRoot(document.getElementById('el1'));
el1.render(
  <React.StrictMode>
    <miApp />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
