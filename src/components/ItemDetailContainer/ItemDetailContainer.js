import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../Constants";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);

  const { id } = useParams();

  const obtenerProductosById = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const resultado = PRODUCTS.find((producto) => producto.id == id);
        resolve(resultado);
      }, 2000);
    });
  };

  useEffect(() => {
    if (id) {
      obtenerProductosById(id).then((response) => {
        setProducto(response);
      });
    }
  }, [id]);

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
