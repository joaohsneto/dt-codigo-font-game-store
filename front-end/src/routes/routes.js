import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Register from '../pages/register';
import Login from '../pages/login';
import Products from '../pages/products';
import Cart from '../pages/Cart';

const AllRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <Navigate to="/home" /> } />        
      <Route path="/home" element={ <Home /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/product" element={ <Products /> } />
      <Route path="/cart" element={ <Cart /> } />
    </Routes>
  </BrowserRouter>
);

export default AllRoutes;
