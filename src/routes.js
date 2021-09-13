import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/login/Login';

const routes = () => {
  return (
    <BrowserRouter>
      <Route path='/login' component={Login} />
    </BrowserRouter>
  );
};

export default routes;
