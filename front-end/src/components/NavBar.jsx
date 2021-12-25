import React, { useState, useEffect, useContext } from 'react';
import GameStoreContext from '../context/context';
import { NavLink } from 'react-router-dom';

const GeneralNavbar = () => {
  const {shopCart} = useContext(GameStoreContext);

  const [currentUser, setCurrentUser] = useState({
    userData: '',
    userLogged: false,
  });

  const [classMenu, setClassMenu] = useState({
    classMenuName: 'navbar-menu',
    burguerMenuActive: false,
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

  const handleClickBurguerMenu = () => {
    if (!classMenu.burguerMenuActive) {
      setClassMenu({
        classMenuName: 'navbar-menu is-active',
        burguerMenuActive: true,
      });
    } else {
      setClassMenu({
        classMenuName: 'navbar-menu',
        burguerMenuActive: false,
      });
    }
  };

  const logged = () => {
    return (
      <div className={ `${classMenu.classMenuName}` }>
        <div className="navbar-start">
          <NavLink className="navbar-item" to='/'>
            Home
          </NavLink>
          <NavLink className="navbar-item" to='/product'>
            Vender Jogos
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item cart-flex">
          <NavLink className="cart-image" to='/cart'>
              <div className="shop-cart-icon-content">
                <img src="../images/cartImage.png" alt="icon-cart" className="icon-cart"/>
                <div className="cart-number" ><h3 className="title is-6 has-text-light">{ shopCart.length }</h3></div>
              </div>
          </NavLink>
            <div className="user-email">
              <h3 className="title is-4 has-text-grey-light">
                { currentUser.userData.email }
              </h3>
            </div>
            <div className="buttons">
              <NavLink className="button is-danger" to='/' onClick={ () => localStorage.clear() }>
                Sair
              </NavLink>
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
          <NavLink className="navbar-item" to='/'>
            Home
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <NavLink className="button is-primary" to='/register'>
                <strong>Cadastrar</strong>
              </NavLink>
              <NavLink className="button is-light" to='/login'>
                Entrar
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <NavLink to="/">
            <img src="../images/game-store.png" alt="game-store" className="brand" />
          </NavLink>
        </div>

        <a
          role="button"
          id="burguer-menu"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="true"
          data-target="navbarBasicExample"
          href='#burguer-menu'
          onClick={ () => handleClickBurguerMenu() }
        >
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
