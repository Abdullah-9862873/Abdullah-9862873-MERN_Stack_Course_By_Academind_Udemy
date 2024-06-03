import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

// Redirect ---> It is used that if the url user entered is something that is not being taken care of in the routes, then redirect to some page...
// Problem ----> Here the problem is that even if it found a route path that exactly matches like the "/places/new" if user entered exactly like this it will still redirect to "/"
// ------------> This is basically done lets say we want to add Footer here which gets rendered in every page thats why its done by the react but we can avoid it by using the following
// Solution ----> Inside the router wrap everything in Switch
