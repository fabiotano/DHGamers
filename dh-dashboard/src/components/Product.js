import React from "react";

function Product({ name, price, stock, category, image, id }) {

  const url = "http://localhost:3000"  + image.split(",")[0]
  const urlProduct = 

  return (
    <div className="container-datos">
      <div className="datos-texto">
      <h2>{name}</h2>
      <p>Precio: ${price}</p>
      <p>Stock: {stock}</p>
      <p>Categoría: {category.name}</p>
      </div>
      <div className="datos-imagen">
        <img 
          src={url}
          alt="imagen producto"
        />
      </div>

    </div>
  );
}

export default Product;