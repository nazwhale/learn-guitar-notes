import React, { Component } from "react";
import Fretboard from "./Components/Fretboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Learn Guitar Notes</h1>
        </header>
        <Fretboard />
      </div>
    );
  }
}

export default App;
