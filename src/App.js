import logo from "./logo.svg";
import "./App.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import { Button } from "primereact/button";

import MyComponent from "./components/MyComponent";

import { useState } from "react";

function App() {
  var [count, setCount] = useState(0);

  function handleClick() {
    count = count + 1;
    setCount(newCount);
    console.log(`current number is ${newCount}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button label="Click Me" onClick={handleClick} />
          <p>Count: {count}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
