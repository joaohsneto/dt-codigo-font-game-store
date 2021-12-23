import React from 'react';
import '../styles/navbar.css';
import '../styles/resgister.css';

import GeneralNavbar from '../components/NavBar';
import LoginUser from '../components/LoginUser';

const Login = () => {

  return (
    <>
      <header>
        <GeneralNavbar />
      </header>
      <section className='principal-title'>
        <h1 className="title is-1">Compre e venda seus jogos agora mesmo!</h1>
      </section>
      <section>
        <LoginUser />
      </section>
    </>
  );
};

export default Login;
