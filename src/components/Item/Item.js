import React, { Component } from "react";
import "./Item.css";

const productos = [
  {
    id: 1,
    nombre: "Economía",
    caracteristica: "Libros de economía",
    precio: "2.000 pesos",
    imagen: (
      <img src="https://blog.bancosantander.es/wp-content/uploads/2018/08/compedio-basico-de-finanzas.jpg" />
    ),
  },

  {
    id: 2,
    nombre: "Filosofía",
    caracteristica: "Libros de filosofía",
    precio: "3.000 pesos",
    imagen: (
      <img src="https://planetadelibrosar6.cdnstatics.com/usuaris/libros/fotos/266/m_libros/265495_portada_viaje-al-centro-de-la-filosofia_nemrod-carrasco_201803131003.jpg" />
    ),
  },

  {
    id: 3,
    nombre: "Sociología",
    caracteristica: "Libros de sociología",
    precio: "1.500 pesos",
    imagen: (
      <img src="https://imgserver1.fierro.com.ar/get/thumb/360/509/9789871086443.jpg" />
    ),
  },
  {
    id: 4,
    nombre: "Religión",
    caracteristica: "Libros de religión",
    precio: "2.500 pesos",
    imagen: (
      <img src="https://libreriaclc.com/_CLCSpain/images/products/large/20258.jpg" />
    ),
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
                {a.nombre} - {a.caracteristica} - {a.precio} - {a.imagen}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Item;
