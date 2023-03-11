import React from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";

import { Button } from "primereact/button";

const UserPage = (props) => {
  console.log(props);
  const { username } = props.match.params;

  return (
    <div>
      <h1>User Page for {username}</h1>

      <Button label="Go Back" onClick={() => props.history.goBack()} />
    </div>
  );
};

const MyDynamicRoutes = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/user/john">John</Link>
        </li>

        <li>
          <Link to="/user/jane">Jane</Link>
        </li>
      </ul>
    </nav>

    <Route path="/user/:username" element={<UserPage></UserPage>} />
  </BrowserRouter>
);

export default MyDynamicRoutes;
