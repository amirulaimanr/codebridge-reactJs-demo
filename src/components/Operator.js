import React, { Component } from "react";

import { InputText } from "primereact/inputtext";

import { Button } from "primereact/button";

class SubmitForm extends Component {
  state = {
    firstNo: "",
    secondNo: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.firstNo);
    console.log(this.state.secondNo);
    this.result = this.state.firstNo * this.state.secondNo;
    console.log(
      "🚀 ~ file: Operator.js:19 ~ SubmitForm ~ result:",
      this.result
    );

    document.getElementById("result").value = this.result;
  };

  handleChangeFirstNo = (e) => {
    this.setState({
      firstNo: e.target.value,
    });
  };

  handleChangeSecondNo = (e) => {
    this.setState({
      secondNo: e.target.value,
    });
  };

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit}>
          <div>
            First No:<br></br>
            <br></br>{" "}
            <InputText
              value={this.state.firstNo}
              onChange={this.handleChangeFirstNo}
            />
          </div>
          <br></br>
          <div>
            Second No:<br></br>
            <br></br>{" "}
            <InputText
              value={this.state.secondNo}
              onChange={this.handleChangeSecondNo}
            />
          </div>
          <br></br>
          <Button label="Submit" type="submit" />
          <br></br>
          <br></br>
          <label for="result">
            Multiplication Result:
            <br></br>
            <br></br>
          </label>
          <InputText type="text" id="result" name="result" readonly></InputText>
        </form>
      </div>
    );
  }
}

export default SubmitForm;
