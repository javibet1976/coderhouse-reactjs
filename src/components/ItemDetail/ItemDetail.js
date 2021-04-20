import React from "react";

function ItemDetail({ producto }) {
  return (
    <div>
      <h3>Detalle de producto</h3>
      {producto && (
        <div>
          <img width="100" src={producto.imagen} />
          <br />
          <strong>{producto.nombre}</strong> <br />
          {producto.categoria} <br />
          <small>{producto.precio}</small>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
