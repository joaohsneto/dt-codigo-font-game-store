import React from 'react';

const GeneralNavbar = () => {

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          OVER GAMES
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="true" data-target="navbarBasicExample" href='/'>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href='/'>
            Home
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" href='/'>
                <strong>Cadastrar</strong>
              </a>
              <a className="button is-light" href='/'>
                Entrar
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GeneralNavbar;
