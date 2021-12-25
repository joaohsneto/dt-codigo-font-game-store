import React, { useState, useEffect, useContext } from 'react';
import GameStoreContext from '../context/context';

const ListProducts = () => {
  const [modalActive, setModalActive] = useState("modal");
  const {
    shopCart,
    setShopCart,
    totalPrice,
    setTotalPrice,
    products,
    setProducts,
  } = useContext(GameStoreContext)

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, [setProducts]);

  const handleClickAddCart = (elem) => {
    if (!shopCart.find((item) => item._id === elem._id)) {
      const addProduct = {
        _id: elem._id,
        name: elem.name,
        price: elem.price,
        quantity: elem.quantity,
        image: elem.image,
      }
      const newShopCart = shopCart;
      newShopCart.push(addProduct);
      setShopCart([...newShopCart]);
      const newTotaPrice = totalPrice;
      newTotaPrice.push(elem.price)
      setTotalPrice([...newTotaPrice]);
      return localStorage.setItem('cart', JSON.stringify(shopCart));
    }
    return setModalActive("modal is-active");
  };

  return (
    <section>
      <div className="card-container">
        { products.map((elem) => (
          <div key={ elem._id } className="card-products">
            <div className="card_image" name={ elem.name } style={{
              backgroundSize: 'cover',
              backgroundImage:`url(${elem.image})`,
              height: `${100}%`
            }}>
               <div className="list-product-content">
                  <p className="title is-5 product-name has-text-light">
                    { elem.name }
                  </p>
                  <p>
                    <span className="title is-5 has-text-light">
                      { 'R$ ' }
                    </span>
                    <span className="title is-5 has-text-primary">
                      { (elem.price).toFixed(2).replace(/\./, ',') }
                    </span>
                  </p>
                  <p>
                    {
                      (elem.quantity > 0) ?
                      (
                        <>
                          <span className="title is-6 has-text-danger">
                            {elem.quantity}
                          </span>
                          <span className="title is-6 has-text-light">
                            { ` em estoque` }
                          </span>
                        </>

                      ) : 
                      (
                        <>
                          <br></br>
                          <br></br>
                          <span className="title is-6 has-text-danger">
                              FORA DE ESTOQUE
                          </span>
                        </>
                      )
                    }
                  </p>
                  { elem.quantity > 0 && (
                    <div>
                    <button
                      onClick={ () => handleClickAddCart(elem) }
                      className="button is-primary btn-add-cart title is-6 has-text-light"
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                  )}
                </div>
              </div>
            </div>
        ))}
        <div className={ `${modalActive}` }>
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="modal-card">
              <div className="modal-card-body">
                <div className="content" >
                <h3 className="title is-5 has-text-danger">Item já adicionado ao carrinho</h3>
                <button className="delete" aria-label="close" onClick={ () => setModalActive("modal") }></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListProducts;
