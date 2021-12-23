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
        <h1 className="title is-1">Cadastre-se para começar a economizar e lucrar!</h1>
      </section>
      <section>
        <RegisterUser />
      </section>
    </>
  );
};

export default Register;
