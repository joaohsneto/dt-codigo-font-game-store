import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Register from '../pages/register';
import Login from '../pages/login';

const AllRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <Navigate to="/home" /> } />        
      <Route path="/home" element={ <Home /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
    </Routes>
  </BrowserRouter>
);

export default AllRoutes;
