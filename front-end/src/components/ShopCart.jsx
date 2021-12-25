import React, { useState, useContext, useEffect } from 'react';
import GameStoreContext from '../context/context';

const ShopCart = () => {
  const [sum, setSum] = useState(0);
  const [modalActive, setModalActive] = useState("modal");
  const {
    shopCart,
    setShopCart,
    totalPrice,
    setTotalPrice,
    updateSum,
    setUpdateSum,
  } = useContext(GameStoreContext)

  useEffect(() => {
    const result = totalPrice.reduce((acc, curr) => acc + curr );
    setSum(result);
  }, [totalPrice, updateSum]);

  const handleClickEndShop = async () => {
    shopCart.forEach( async (element) => {
      element.quantity -= 1;
      await fetch(`http://localhost:3001/products/${element._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quantity: element.quantity,
        }),
      });
    });
    setShopCart([]);
    setTotalPrice([0]);
    setModalActive("modal is-active")
  };

  const removeItens = (elem, index) => {
    const newShopCart = shopCart
      .filter((_elem, i) => i !== index);
      setShopCart(newShopCart);
      console.log(elem.price)
      const totalIndex = totalPrice.indexOf(elem.price);
      totalPrice.splice(totalIndex, 1);
      setUpdateSum(!updateSum);
  };

  return (
    <>
      <section>
        <div className="cart-container">
          <div className="shop-cart-container" >
            { shopCart.map((elem, index) => (
              <div key={ elem._id } className="shop-cart-products">
                <div className="shop-cart-all-content">
                    <img src={ elem.image } alt={ elem.name } className="shop-cart-image" />
                    <p className="title is-6 product-name">
                      { elem.name }
                    </p>
                    <p>
                      <span className="title is-6">
                        { 'R$ ' }
                      </span>
                      <span className="title is-6 has-text-primary">
                        { (elem.price).toFixed(2).replace(/\./, ',') }
                      </span>
                    </p>
                    <button onClick={ () => removeItens(elem, index) } className="button is-primary btn-add-cart title is-6 has-text-light">
                      Remover
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
            { shopCart.length > 0 ? (
              <section>
              <h3 className="title is-4 has-text-info">{ `TOTAL R$ ${sum.toFixed(2).replace(/\./, ',')}` }</h3>
              <button
                className="button is-primary title is-6 has-text-light"
                onClick={ () => handleClickEndShop() }
              >
                FINALIZAR COMPRA
              </button>
            </section>
            ) : (
              <h4 className="title is-4 has-text-danger">Carrinho vazio!</h4>
            ) }
      </section>
      <div className={ `${modalActive}` }>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="modal-card">
            <div className="modal-card-body">
              <div className="content" >
              <h3 className="title is-5 has-text-danger">Parabéns, compra finalizada com sucesso!</h3>
              <button className="delete" aria-label="close" onClick={ () => setModalActive("modal") }></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCart;
