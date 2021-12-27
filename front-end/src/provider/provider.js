import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GameStoreContext from '../context/context';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [shopCart, setShopCart] = useState([]);
  const [updateSum, setUpdateSum] = useState(true)
  const [totalPrice, setTotalPrice] = useState([0]);
  const [classMenu, setClassMenu] = useState({
    classMenuName: 'navbar-menu',
    burguerMenuActive: false,
  });
  const contextValue = {
    classMenu,
    setClassMenu,
    updateSum,
    setUpdateSum,
    shopCart,
    setShopCart,
    totalPrice,
    setTotalPrice,
    products,
    setProducts
  };

  return (
    <GameStoreContext.Provider value={ contextValue }>
      {children}
    </GameStoreContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
