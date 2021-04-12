import React, { Component } from "react";
import "./Item.css";

const productos = [
  {
    id: 1,
    nombre: "Economía",
    caracteristica: "Libros de economía",
    precio: " 2.000 pesos",
  },
  {
    id: 2,
    nombre: "Filosofía",
    caracteristica: "Libros de filosofía",
    precio: " 3.000 pesos",
  },
  {
    id: 3,
    nombre: "Sociología",
    caracteristica: "Libros de sociología",
    precio: " 1.500 pesos",
  },
  {
    id: 4,
    nombre: "Religión",
    caracteristica: "Libros de religión",
    precio: " 2.500 pesos",
  },
];

class Item extends Component {
  constructor() {
    super();
    this.state = {
      ciclos_de_vida: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ciclos_de_vida: productos,
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <ul className="productos">
          {this.state.ciclos_de_vida.map((a) => {
            return (
              <li>
                {a.nombre} - {a.caracteristica} - {a.precio}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Item;
