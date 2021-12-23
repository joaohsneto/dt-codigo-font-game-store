import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GameStoreContext from '../context/context';

function Provider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    userData: '',
    userLogged: false,
  });
  const contextValue = {
    currentUser,
    setCurrentUser,
  };

  return (
    <GameStoreContext.Provider value={ contextValue }>
      {children}
    </GameStoreContext.Provider>
  );
}

Provider.propTypes = {
  // https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;