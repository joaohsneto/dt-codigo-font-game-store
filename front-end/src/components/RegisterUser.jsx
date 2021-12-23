import React, { useState } from 'react';
import CryptoJS  from 'crypto-js';
import { Navigate } from 'react-router-dom';

const RegisterUser = () => {
  const [createUserAllowed, setCreateUserAllowed] = useState(false);
  const [createEmail, setCreateEmail] = useState({
    invalidEmail: true,
    fieldEmail: '',
  });
  const [createPassword, setCreatePassword] = useState({
    invalidPassword: true,
    fieldPassword: '',
  });
  const [confirmPassword, setConfirmPassword] = useState({
    invalidConfirmPassword: true,
    fieldConfirmPassword: '',
  });
  const [registerMsgError, setRegisterMsgError] = useState();

  const handleChangeEmail = ({ value }) => {
    const regexEmail = /^([\w\\.\\-]+)@([\w\\-]+)((\.(\w){2,3})+)$/;
    if (regexEmail.test(value)) {
      setCreateEmail({
        invalidEmail: false,
        fieldEmail: value,
      });
      setRegisterMsgError('');
    } else {
      setCreateEmail({
        invalidEmail: true,
      });
      setRegisterMsgError('E-mail inválido!');
    }
  };

  const handleChangePassword = ({ value }) => {
    const six = 6;
    if (value.length >= six) {
      setCreatePassword({
        invalidPassword: false,
        fieldPassword: value,
      });
      setRegisterMsgError('');
    } else {
      setCreatePassword({
        invalidPassword: true,
      });
      setRegisterMsgError('Senha menor que 6 caracteres!');
    }
  };

  const handleChangeConfirmPassword = ({ value }) => {
    if (value === createPassword.fieldPassword) {
      const passwordMD5 = CryptoJS.MD5(value).toString()
      setConfirmPassword({
        invalidConfirmPassword: false,
        fieldConfirmPassword: passwordMD5,
      });
      setRegisterMsgError('');
    } else {
      setConfirmPassword({
        invalidConfirmPassword: true,
      });
      setRegisterMsgError('Senhas não conferem!');
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
        email: createEmail.fieldEmail,
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
      setRegisterMsgError(data.message);
    } else {
      setCreateEmail({
        invalidEmail: true,
        fieldEmail: '',
      });
      setCreatePassword({
        invalidPassword: true,
        fieldPassword: '',
      });
      setCreateUserAllowed(true);
    }
    return data;
  });

  return (
    <section className="container-register">
      <div className="form-register">
          <div className="form-content">
            <input
              onChange={ ({ target }) => handleChangeEmail(target) }
              className="input input-general"
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <input
              onChange={ ({ target }) => handleChangePassword(target) }
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
              disabled={ confirmPassword.invalidConfirmPassword || createEmail.invalidEmail || createPassword.invalidPassword }
              className="button is-primary btn-general"
              type="button"
            >
              CADASTRAR
            </button>
            <div className="message-error">
              <span>
                { registerMsgError }
              </span>
            </div>
          </div>
      </div>
      { createUserAllowed && <Navigate to="/home" />}
    </section>
  );
};

export default RegisterUser;
