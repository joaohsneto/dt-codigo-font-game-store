import React from 'react';
import '../styles/products.css';
import '../styles/navbar.css';

import ListProducts from '../components/ListProducts';
import GeneralNavbar from '../components/NavBar';

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
