import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import'@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './Components/App/App.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter basename={process.env.PUBLIC_URL}> 
  <App /> 
</BrowserRouter>

);


