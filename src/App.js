import React from "react";
import "./App.css";
import Home from "./Components/Home";
import LaunguageManager from "./Components/LaunguageManager";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/web" component={LaunguageManager} />
      </Switch>
    </Router>
  );
}

export default App;
