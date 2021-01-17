import React from "react";
import { Switch, Route } from "react-router-dom";
import Game from "./pages/game/game.component";
import Start from "./pages/start/start.component";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/start" component={Start} />
        <Route path="/" component={Game} />
      </Switch>
    </>
  );
}

export default App;
