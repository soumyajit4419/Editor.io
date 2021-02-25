import React from "react";
import "./App.css";
import Home from "./Components/Home";
import WebEditor from "./Components/WebEditor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/web" component={WebEditor} />
      </Switch>
    </Router>
  );
}

export default App;
