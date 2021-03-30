// import logo from './logo.svg';
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <h1>E-commerce Betancourt</h1>
      <h2>Los mejores libros para su biblioteca</h2>
      <NavBar />
      <button className="btn btn primary">Prueba bootstrap</button>
      
    </div>
  );
}

export default App;
