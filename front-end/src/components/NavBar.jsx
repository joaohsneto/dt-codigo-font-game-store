import React, { useState, useEffect } from 'react';
// import GameStoreContext from '../context/context';

const GeneralNavbar = () => {
  const [currentUser, setCurrentUser] = useState({
    userData: '',
    userLogged: false,
  });

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser) {
      setCurrentUser({
        userData: loggedUser,
        userLogged: true,
      });
    }
  }, []);

  const logged = () => {
    return (
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href='/'>
            Home
          </a>
          <a className="navbar-item" href='/'>
            Vender Jogos
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="user-email">
              <h3 className="title is-3 title-text-email">
                { currentUser.userData.email }
              </h3>
            </div>
            <div className="buttons">
              <a className="button is-danger" href='/' onClick={ () => localStorage.clear() }>
                Sair
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const notLogged = () => {
    return (
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href='/'>
            Home
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" href='/register'>
                <strong>Cadastrar</strong>
              </a>
              <a className="button is-light" href='/login'>
                Entrar
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="../images/game-store04.png" alt="game-store" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="true" data-target="navbarBasicExample" href='/'>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      { currentUser.userLogged ? logged() : notLogged() }
    </nav>
  );
};

export default GeneralNavbar;
