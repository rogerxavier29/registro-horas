import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/login/Login';
import Registro from './pages/registro/Registro';

const routes = () => {
  return (
    <BrowserRouter>
      <Route path='/login' component={Login} />
      <Route path='/registro' component={Registro} />
    </BrowserRouter>
  );
};

export default routes;
