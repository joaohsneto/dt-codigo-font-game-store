import React from 'react';
import '../styles/navbar.css';
import '../styles/products.css';

import GeneralNavbar from '../components/NavBar';
import ListProducts from '../components/ListProducts';

const Home = () => {

  return (
    <>
      <header>
        <GeneralNavbar />
      </header>
      <section>
        <ListProducts />
      </section>
    </>
  );
};

export default Home;
