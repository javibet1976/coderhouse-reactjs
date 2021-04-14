import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import "./ItemCount.css";

export default class ItemCount extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    if (this.state.count >= 1) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="contador-container">
        <p>{this.state.count}</p>
        <div className="botonera-contador">
          <Button secondary onClick={this.handleIncrement}>
            +
          </Button>
          <Button secondary onClick={this.handleDecrement}>
            -
          </Button>
        </div>
      </div>
    );
  }
}
