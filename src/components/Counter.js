import React, { Component } from "react";

import { Button } from "primereact/button";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrementClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrementClick = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <Button label="Increment" onClick={this.handleIncrementClick} />
        &nbsp;&nbsp;&nbsp;
        <Button label="Decrement" onClick={this.handleDecrementClick} />
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default Counter;
