import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home';
import Login from './pages/login';
import Admin from './pages/admin';
import Agendamento from './pages/agendamentos';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/'element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/agendamentos' element={<Agendamento />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
