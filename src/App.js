import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/style.scss";

import Game from "./components/Game";
import FirstPage from "./components/FirstPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/play" component={Game} />
        <Route exact path="/" component={FirstPage} />
      </Switch>
    </Router>
  );
};

export default App;
