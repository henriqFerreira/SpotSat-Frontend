import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './layout/app/App';
import Auth from './layout/auth/Auth';
import Login from './pages/login/Login';
import Localizacao from './pages/localizacao/Localizacao';
import Mapa from './pages/mapa/Mapa';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Auth /> }>
                <Route index element={ <Login /> } />
            </Route>
            <Route path='/mapas' element={ <App /> } >
                <Route index element={ <Localizacao /> } />
                <Route path='mapa/:id' element={ <Mapa /> } />
            </Route>
        </Routes>
    </BrowserRouter>
);