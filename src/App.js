import React, { Component } from "react";
import Game from "./Components/Game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Learn Guitar Notes</h1>
        </header>
        <Game />
      </div>
    );
  }
}

export default App;
