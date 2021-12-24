import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GameStoreContext from '../context/context';

function Provider({ children }) {
  const [shopCart, setShopCart] = useState([]);
  const contextValue = {
    shopCart,
    setShopCart,
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
