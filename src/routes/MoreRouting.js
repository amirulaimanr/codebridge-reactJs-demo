import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home page!</h1>

      <Link to="/about">Go to About page</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About page</h1>

      <Link to="/">Go to Home page</Link>
    </div>
  );
}

function MoreRouting() {
  return (
    <Router>
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </Routes>
    </Router>
  );
}

export default MoreRouting;
