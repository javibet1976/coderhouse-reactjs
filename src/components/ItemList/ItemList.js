import React, { Component } from "react";

export default class itemList extends Component {
  render() {
    return (
      <div className="listaDeArticulos">
        <ul>
          <li>Economía</li>
          <li>Filosofía</li>
          <li>Sociología</li>
          <li>Religión</li>
        </ul>
      </div>
    );
  }
}
