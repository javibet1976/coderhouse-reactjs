import React from "react";

function Item({ producto }) {
  return (
    <li>
      <div>
        <img width="100" src={producto.imagen} />
        <br />
        <strong>{producto.nombre}</strong> <br />
        {producto.categoria} <br />
        <small>{producto.precio}</small>
      </div>
    </li>
  );
}

export default Item;
