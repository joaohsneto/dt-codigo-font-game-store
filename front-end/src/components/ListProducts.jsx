import React, { useState, useEffect } from 'react';

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  return (
    <section>
      <div className="card-container">
        { products.map((elem) => (
          <div key={ elem._id } className="card-products">
            <div className='card_image' name={ elem.name } style={{
              backgroundSize: 'cover',
              backgroundImage:`url(${elem.image})`,
              height: `${100}%`
            }}>
            </div>
            <div>
              <p>
                { elem.name }
              </p>
              <p>
              <span>
                { 'R$ ' }
              </span>
              <span>
                { (elem.price) }
              </span>
            </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListProducts;
