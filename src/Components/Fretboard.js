import * as React from "react";
import { FRET_NOTES } from "./notes";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default class Fretboard extends React.Component {
  state = {
    isAnswerRevealed: false,
    fretNote: {}
  };

  componentDidMount = () => {
    this.getRandomFretNote();
  };

  getRandomFretNote = () => {
    const index = getRandomInt(FRET_NOTES.length - 1);
    const fretNote = FRET_NOTES[index];
    this.setState({ fretNote });
  };

  getNextFretNote = () => {
    this.setState({ isAnswerRevealed: false });
    this.getRandomFretNote();
  };

  revealAnswer = () => {
    this.setState({ isAnswerRevealed: true });
  };

  render() {
    const { fretNote, isAnswerRevealed } = this.state;

    return (
      <>
        <p>String: {fretNote["string"]}</p>
        <p>Fret: {fretNote["fret"]}</p>
        <div>
          Answer:{" "}
          {isAnswerRevealed ? (
            <span>{fretNote["note"]}</span>
          ) : (
            <button onClick={this.revealAnswer}>Reveal Answer</button>
          )}
        </div>
        <div>
          <button onClick={this.getNextFretNote}>Next</button>
        </div>
      </>
    );
  }
}
