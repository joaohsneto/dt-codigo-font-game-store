import React from 'react';
import '../styles/navbar.css';
import '../styles/resgister.css';

import GeneralNavbar from '../components/NavBar';
import RegisterProduct from '../components/RegisterProducts';

const Products = () => {

  return (
    <>
      <header>
        <GeneralNavbar />
      </header>
      <section className='principal-title'>
        <h1 className="title is-1">Cadastro de jogos</h1>
      </section>
      <section>
        <RegisterProduct />
      </section>
    </>
  );
};

export default Products;