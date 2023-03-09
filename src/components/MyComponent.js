import React, { Component } from "react";

import { Button } from "primereact/button";

class MyComponent extends Component {
  render(props) {
    return (
      <div>
        <h1>{props.myOwnName}</h1>
        <Button label={props.myButtonName} />
      </div>
    );
  }
}

export default MyComponent;
