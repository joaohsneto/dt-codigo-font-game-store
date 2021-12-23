import React from 'react';
import '../styles/navbar.css';
import '../styles/resgister.css';

import GeneralNavbar from '../components/NavBar';
import RegisterUser from '../components/RegisterUser';

const Register = () => {

  return (
    <>
      <header>
        <GeneralNavbar />
      </header>
      <section className='principal-title'>
        <h1 className="title is-1">Compre e venda seus jogos!</h1>
      </section>
      <section>
        <RegisterUser />
      </section>
    </>
  );
};

export default Register;