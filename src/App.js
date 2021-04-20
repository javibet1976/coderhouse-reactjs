// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/Button";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import Home from "../src/Views/Home/Home";
import Promos from "../src/Views/Promos/Promos";
import Contacto from "../src/Views/Contacto/Contacto";
import Conferencias from "../src/Views/Conferencias/Conferencias";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <h1>E-commerce Betancourt</h1>
          <h2>Los mejores libros para su biblioteca</h2>
        </div>
        <br />
        <Switch>
          <Route exact path="/Promos" component={Promos} />
          <Route exact path="/Contacto" component={Contacto} />
          <Route exact path="/Conferencias" component={Conferencias} />
          <Route exact path="/detalle/:id" component={ItemDetailContainer} />
          <Route path="/" component={ItemListContainer} />
        </Switch>

        <div className="marginTopProvisional">
          <ItemCount />
        </div>
      </Router>
    </>
  );
}

export default App;
