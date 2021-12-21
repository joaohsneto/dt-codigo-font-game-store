import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import Home from '../pages/Home';

const AllRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <Navigate to="/home" /> } />        
      <Route path="/home" element={ <Home /> } />
    </Routes>
  </BrowserRouter>
);

export default AllRoutes;
