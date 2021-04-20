import React from "react";
import { useHistory } from "react-router-dom";

function Item({ producto }) {
  const history = useHistory();
  const verDetalle = (id) => {
    history.push("/detalle/" + id);
  };

  return (
    <li>
      <div>
        <img width="100" src={producto.imagen} />
        <br />
        <strong>{producto.nombre}</strong> <br />
        {producto.categoria} <br />
        <small>{producto.precio}</small>
        <button onClick={() => verDetalle(producto.id)}>Ver detalle</button>
      </div>
    </li>
  );
}

export default Item;
