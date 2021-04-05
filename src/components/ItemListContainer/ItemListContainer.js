import React from "react";
import "./ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
  return (
    <h3>
      <h3>{greeting}</h3>
      <div className="listaDeArticulos">
        <ul>
          <li>Economía</li>
          <li>Filosofía</li>
          <li>Sociología</li>
          <li>Religión</li>
        </ul>
      </div>
    </h3>
  );
}
