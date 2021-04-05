// import logo from './logo.svg';
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/Button";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <h1>E-commerce Betancourt</h1>
        <h2>Los mejores libros para su biblioteca</h2>
        <Button click="Presione" />
      </div>

      <ItemListContainer greeting="Aquí encontrarás muchos libros a muy bajo precio" />
    </>
  );
}

export default App;
