import React, { Component } from "react";
import "./ItemCount.css";
import { Button } from "semantic-ui-react";

export default class ItemCount extends Component {
  constructor() {
    super();

    this.state = {
      numerocontador: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.numerocontador + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.numerocontador - 1 });
  };

  render() {
    return (
      <div className="contador-container">
        <p>{this.state.numerocontador}</p>
        <div className="botonera-contador">
          <Button secondary ocClick={this.handleIncrement}>
            +
          </Button>
          <Button secondary ocClick={this.handleDecrement}>
            -
          </Button>
        </div>
      </div>
    );
  }
}
