import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.js";
import { PRODUCTS } from "../Constants";
import "./ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(PRODUCTS);
    }, 2000);
  });

  useEffect(() => {
    obtenerProductos.then((response) => {
      setProductos(response);
    });
  }, []);

  return (
    <>
      <h3>{greeting}</h3>
      <ItemList productos={productos} />
    </>
  );
}
