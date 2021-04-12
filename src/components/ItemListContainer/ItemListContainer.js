import React from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import Item from "../Item/Item.js";

export default function ItemListContainer({ greeting }) {
  return (
    <>
      <h3>{greeting}</h3>
      <ItemList />
      <Item />
    </>
  );
}
