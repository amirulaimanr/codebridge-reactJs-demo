import "./App.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import "/node_modules/primeflex/primeflex.css";

//navbar
import Navigation from "./components/NavBar";

import Header from "./components/ExHeader";

import ProdServices from "./components/ProdServices";

import Plans from "./components/Plans";

import Counter from "./components/Counter";

import Operator from "./components/Operator";

//routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

//submitform
import SubmitForm from "./components/SubmitForm";
import ExHeader from "./components/ExHeader";
import MyDynamicRoutes from "./routes/MyDynamicRoutes";
import MyRoutes from "./routes/MyRoutes";
import MoreRouting from "./routes/MoreRouting";

function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <br></br>
      <br></br>
      <ProdServices></ProdServices>
      <br></br>
      <br></br>
      <Plans></Plans>
      <br></br>
      <br></br> */}

      {/* <Navigation></Navigation>
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
      <SubmitForm></SubmitForm> */}

      {/* <Counter></Counter>
      <br></br>
      <br></br>
      <Operator></Operator> */}
      {/* <MyRoutes></MyRoutes> */}
      <MoreRouting></MoreRouting>
    </div>
  );
}

export default App;
