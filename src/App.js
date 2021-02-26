import React from "react";
import Home from "./Components/Home";
import WebEditor from "./Components/WebEditor";
import MarkdownEditor from "./Components/MarkdownEditor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/web" component={WebEditor} />
        <Route path="/markdown" component={MarkdownEditor} />
      </Switch>
    </Router>
  );
}

export default App;
