import React, { useState } from 'react';
import CryptoJS  from 'crypto-js';
import { Navigate } from 'react-router-dom';

const LoginUser = () => {
  const [loginAllowed, setLoginAllowed] = useState(false);
  const [loginEmail, setLoginEmail] = useState({
    invalidEmail: true,
    fieldEmail: '',
  });
  const [loginPassword, setLoginPassword] = useState({
    invalidPassword: true,
    fieldPassword: '',
  });
  const [loginMsgError, setLoginMsgError] = useState();

  const handleChangeEmail = ({ value }) => {
    const regexEmail = /^([\w\\.\\-]+)@([\w\\-]+)((\.(\w){2,3})+)$/;
    if (regexEmail.test(value)) {
      setLoginEmail({
        invalidEmail: false,
        fieldEmail: value,
      });
      setLoginMsgError('');
    } else {
      setLoginEmail({
        invalidEmail: true,
      });
      setLoginMsgError('*Invalid email');
    }
  };

  const handleChangePassword = ({ value }) => {
    const six = 6;
    if (value.length >= six) {
      const passwordMD5 = CryptoJS.MD5(value).toString()
      setLoginPassword({
        invalidPassword: false,
        fieldPassword: passwordMD5,
      });
      setLoginMsgError('');
    } else {
      setLoginPassword({
        invalidPassword: true,
      });
      setLoginMsgError('*Must have more than 6 characters');
    }
  };

  const handleClick = (async () => {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: loginEmail.fieldEmail,
        password: loginPassword.fieldPassword,
      }),
    });
    const data = await response.json();
    localStorage.setItem('user',
      JSON.stringify({
        email: data.email,
        token: data.token,
      }));
    if (data.message) {
      setLoginMsgError(data.message);
    } else {
      setLoginEmail({
        invalidEmail: true,
        fieldEmail: '',
      });
      setLoginPassword({
        invalidPassword: true,
        fieldPassword: '',
      });
      setLoginAllowed(true);
    }
    return data;
  });

  return (
    <section className="container-register">
      <div className="form-register">
          <div className="form-content">
            <input
              onChange={ ({ target }) => handleChangeEmail(target) }
              data-testid="common_register__input-email"
              className="input input-general"
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <input
              onChange={ ({ target }) => handleChangePassword(target) }
              data-testid="common_register__input-password"
              className="input input-general"
              type="password"
              name="password"
              placeholder="Senha"
            />
            <button
              onClick={ handleClick }
              disabled={ loginEmail.invalidEmail || loginPassword.invalidPassword }
              className="button is-primary btn-general"
              type="button"
            >
              CADASTRAR
            </button>
            <div className="message-error">
              <span>
                { loginMsgError }
              </span>
            </div>
          </div>
      </div>
      { loginAllowed && <Navigate to="/home" />}
    </section>
  );
};

export default LoginUser;