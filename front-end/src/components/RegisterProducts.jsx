import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const RegisterProduct = () => {
  const [registerProductAllowed, setRegisterProductAllowed] = useState(false);
  const [productName, setProductName] = useState({
    invalidProductName: true,
    fieldProductName: '',
  });
  const [productPrice, setProductPrice] = useState({
    invalidPrice: true,
    fieldPrice: '',
  });
  const [productQuantity, setProductQuantity] = useState({
    invalidQuantity: true,
    fieldQuantity: '',
  });
  const [productimage, setProductimage] = useState({
    invalidImage: true,
    fieldImage: '',
  });
  const [productMsgError, setProductMsgError] = useState();

  const handleChangeProductName = ({ value }) => {
    if (value) {
      setProductName({
        invalidProductName: false,
        fieldProductName: value,
      });
      setProductMsgError('');
    } else {
      setProductName({
        invalidProductName: true,
      });
      setProductMsgError('Nome do jogo é obrigatório!');
    }
  };

  const handleChangeProductPrice = ({ value }) => {
    if (value.match(/^[\d,.?!]+$/)) {
      setProductPrice({
        invalidPrice: false,
        fieldPrice: value,
      });
      setProductMsgError('');
    } else {
      setProductPrice({
        invalidPrice: true,
      });
      setProductMsgError('Formato não aceito!');
    }
  };

  const handleChangeProductQuantity = ({ value }) => {
    if (value.match(/\d+/)) {
      setProductQuantity({
        invalidQuantity: false,
        fieldQuantity: value,
      });
      setProductMsgError('');
    } else {
      setProductQuantity({
        invalidQuantity: true,
      });
      setProductMsgError('Apenas números!');
    }
  };

  const handleChangeProductImage = ({ value }) => {
    if (value) {
      setProductimage({
        invalidImage: false,
        fieldImage: value,
      });
      setProductMsgError('');
    } else {
      setProductimage({
        invalidImage: true,
      });
      setProductMsgError('Insira o caminho da imagem');
    }
  };

  const handleClick = (async () => {
    const response = await fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: productName.fieldProductName,
        price: productPrice.fieldPrice,
        quantity: productQuantity.fieldQuantity,
        image: productimage.fieldImage,
      }),
    });
    const data = await response.json();
    localStorage.setItem('products',
      JSON.stringify({ ...data }));
    if (data.message) {
      setProductMsgError(data.message);
    } else {
      setProductName({
        invalidProductName: true,
        fieldProductName: '',
      });
      setProductPrice({
        invalidPrice: true,
        fieldPrice: '',
      });
      setProductQuantity({
        invalidQuantity: true,
        fieldQuantity: '',
      });
      setProductimage({
        invalidImage: true,
        fieldImage: '',
      });
      setRegisterProductAllowed(true);
    }
    return data;
  });

  return (
    <section className="container-register">
      <div className="form-register">
          <div className="form-content">
            <input
              onChange={ ({ target }) => handleChangeProductName(target) }
              className="input input-general"
              type="text"
              name="product-name"
              placeholder="Nome do Jogo"
            />
            <input
              onChange={ ({ target }) => handleChangeProductPrice(target) }
              className="input input-general"
              type="text"
              name="product-price"
              placeholder="Valor"
            />
            <input
              onChange={ ({ target }) => handleChangeProductQuantity(target) }
              className="input input-general"
              type="text"
              name="produto-quantity"
              placeholder="Quantidade"
            />
            <input
              onChange={ ({ target }) => handleChangeProductImage(target) }
              className="input input-general"
              type="text"
              name="produto-image"
              placeholder="Caminho da imagem"
            />
            <button
              onClick={ handleClick }
              disabled={
                productQuantity.invalidQuantity
                ||
                productName.invalidProductName
                ||
                productPrice.invalidPrice
                ||
                productimage.invalidImage
              }
              className="button is-primary btn-general"
              type="button"
            >
              CADASTRAR JOGO
            </button>
            <div className="message-error">
              <span>
                { productMsgError }
              </span>
            </div>
          </div>
      </div>
      { registerProductAllowed && <Navigate to="/home" />}
    </section>
  );
};

export default RegisterProduct;
