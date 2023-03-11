import React, { Component } from "react";

import { InputText } from "primereact/inputtext";

import { Button } from "primereact/button";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import "/node_modules/primeflex/primeflex.css";

class SubmitForm extends Component {
  state = {
    username: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.username);
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    return (
      <div class="grid">
        <div class="col inline w-4rem h-4rem bg-green-500 text-white font-bold text-center p-4 border-round mx-4">
          1
        </div>
        <div class="col inline w-4rem h-4rem bg-green-500 text-white font-bold text-center p-4 border-round mx-4">
          2
        </div>
        <div class="col inline w-4rem h-4rem bg-green-500 text-white font-bold text-center p-4 border-round mx-4">
          3
        </div>
      </div>
    );
  }
}

export default SubmitForm;
