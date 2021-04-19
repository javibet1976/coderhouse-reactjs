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
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <h1>E-commerce Betancourt</h1>
          <h2>Los mejores libros para su biblioteca</h2>
          <Button click="Presione" />
        </div>
        <ItemListContainer greeting="Aquí encontrarás muchos libros a muy bajo precio" />
        <br />
        <Switch>
          <Route path="/" exact component={ItemListContainer} />
          <Route path="/Promos" component={Promos} />
          <Route path="/Contacto" component={Contacto} />
          <Route path="/Conferencias" component={Conferencias} />
        </Switch>

        <div className="marginTopProvisional">
          <ItemCount />
        </div>
      </Router>
    </>
  );
}

export default App;
