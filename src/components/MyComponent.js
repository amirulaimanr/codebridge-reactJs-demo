import React, { Component } from "react";

import { Button } from "primereact/button";

class MyComponent extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <Button label="Click Me" onClick={this.handleClick} />

        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default MyComponent;
