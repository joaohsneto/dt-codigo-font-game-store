import React from 'react';
import '../styles/navbar.css';
import '../styles/resgister.css';

import GeneralNavbar from '../components/NavBar';
import ShopCart from '../components/ShopCart';

const Cart = () => {

  return (
    <>
      <header>
        <GeneralNavbar />
      </header>
      <section>
        <ShopCart />
      </section>
    </>
  );
};

export default Cart;
