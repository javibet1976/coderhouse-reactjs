import React from "react";
import Item from "../Item/Item";
import "../Item/Item.css";

function ItemList({ productos }) {
  return (
    <div className="listaDeArticulos">
      {productos && (
        <div>
          {productos.map((item) => (
            <ul className="productos">
              <Item producto={item} />
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemList;
