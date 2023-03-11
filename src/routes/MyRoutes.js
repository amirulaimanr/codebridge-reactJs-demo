import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Counter from "../components/Counter.js";
import ExHeader from "../components/ExHeader.js";

import Operator from "../components/Operator.js";
import ProdServices from "../components/ProdServices.js";

const HomePage = () => <h1>Banner Page</h1>;

const AboutPage = () => <h1>Operator Page</h1>;

const ContactPage = () => <h1>Plan Page</h1>;

const MyRoutes = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Banner Page</Link>
        </li>

        <li>
          <Link to="/about">Operator Page</Link>
        </li>

        <li>
          <Link to="/contact">Plan Page</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<ExHeader />} />

      <Route path="/about" element={<Operator />} />

      <Route path="/contact" element={<ProdServices />} />
    </Routes>
  </BrowserRouter>
);

export default MyRoutes;
