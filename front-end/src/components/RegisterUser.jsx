import React, { useState } from 'react';
import CryptoJS  from 'crypto-js';
import { Navigate } from 'react-router-dom';

const RegisterUser = () => {
  const [loginAllowed, setLoginAllowed] = useState(false);
  const [email, setEmail] = useState({
    invalidEmail: true,
    fieldEmail: '',
  });
  const [password, setPassword] = useState({
    invalidPassword: true,
    fieldPassword: '',
  });
  const [confirmPassword, setConfirmPassword] = useState({
    invalidConfirmPassword: true,
    fieldConfirmPassword: '',
  });
  const [msgError, setMsgError] = useState();

  const handleChangeEmail = ({ value }) => {
    const regexEmail = /\S+@\S+\.\S+/;
    if (regexEmail.test(value)) {
      setEmail({
        invalidEmail: false,
        fieldEmail: value,
      });
      setMsgError('');
    } else {
      setEmail({
        invalidEmail: true,
      });
      setMsgError('*Invalid email');
    }
  };

  const handleChangePassword = ({ value }) => {
    const six = 6;
    if (value.length >= six) {
      setPassword({
        invalidPassword: false,
        fieldPassword: value,
      });
      setMsgError('');
    } else {
      setPassword({
        invalidPassword: true,
      });
      setMsgError('*Must have more than 6 characters');
    }
  };

  const handleChangeConfirmPassword = ({ value }) => {
    if (value === password.fieldPassword) {
      const passwordMD5 = CryptoJS.MD5(value).toString()
      setConfirmPassword({
        invalidConfirmPassword: false,
        fieldConfirmPassword: passwordMD5,
      });
      setMsgError('');
    } else {
      setConfirmPassword({
        invalidConfirmPassword: true,
      });
      setMsgError('*Passwords don`t match');
    }
  };

  const handleClick = (async () => {
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.fieldEmail,
        password: confirmPassword.fieldConfirmPassword,
      }),
    });
    const data = await response.json();
    localStorage.setItem('user',
      JSON.stringify({
        email: data.email,
        token: data.token,
      }));
    if (data.message) {
      setMsgError(data.message);
    } else {
      setEmail({
        invalidEmail: true,
        fieldEmail: '',
      });
      setPassword({
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
            <input
              onChange={ ({ target }) => handleChangeConfirmPassword(target) }
              className="input input-general"
              type="password"
              name="confirmedpassword"
              placeholder="Confirmar senha"
            />
            <button
              onClick={ handleClick }
              disabled={ confirmPassword.invalidConfirmPassword || email.invalidEmail || password.invalidPassword }
              className="button is-primary btn-general"
              type="button"
            >
              CADASTRAR
            </button>
            <div className="message-error">
              <span>
                { msgError }
              </span>
            </div>
          </div>
      </div>
      { loginAllowed && <Navigate to="/home" />}
    </section>
  );
};

export default RegisterUser;