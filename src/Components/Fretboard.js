import * as React from "react";
import styled from "styled-components";
import { FRET_NOTES } from "./notes";

const NoteSelection = styled.button``;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const ResultEmoji = ({ isCorrect }) => {
  return isCorrect ? (
    <span role="img" aria-label="tada">
      🎉
    </span>
  ) : (
    <span role="img" aria-label="sob">
      😭
    </span>
  );
};

export default class Fretboard extends React.Component {
  state = {
    isAnswerRevealed: false,
    fretNote: {},
    isSelectionCorrect: null
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
    this.setState({ isAnswerRevealed: false, isSelectionCorrect: null });
    this.getRandomFretNote();
  };

  revealAnswer = () => {
    this.setState({ isAnswerRevealed: true });
  };

  handleNoteSelection = (e, note) => {
    const selection = e.target.value;
    const isSelectionCorrect = this.isSelectionCorrect(selection, note);
    this.setState({ isSelectionCorrect });
    this.revealAnswer();
  };

  isSelectionCorrect = (selection, note) => {
    return selection === note;
  };

  render() {
    const { fretNote, isAnswerRevealed, isSelectionCorrect } = this.state;
    const note = fretNote["note"];

    return (
      <>
        <p>String: {fretNote["string"]}</p>
        <p>Fret: {fretNote["fret"]}</p>
        <div>
          Answer:{" "}
          {isAnswerRevealed ? (
            <span>{fretNote["note"]}</span>
          ) : (
            <>
              <NoteSelection
                onClick={e => this.handleNoteSelection(e, note)}
                value="A"
              >
                A
              </NoteSelection>
              <NoteSelection
                onClick={e => this.handleNoteSelection(e, note)}
                value="A#"
              >
                A#
              </NoteSelection>
              <NoteSelection
                onClick={e => this.handleNoteSelection(e, note)}
                value="B"
              >
                B
              </NoteSelection>
              <NoteSelection
                onClick={e => this.handleNoteSelection(e, note)}
                value="C"
              >
                C
              </NoteSelection>
              <NoteSelection
                onClick={e => this.handleNoteSelection(e, note)}
                value="C#"
              >
                C#
              </NoteSelection>
              <NoteSelection
                onClick={e => this.handleNoteSelection(e, note)}
                value="D"
              >
                D
              </NoteSelection>
              <NoteSelection
                onClick={e => this.handleNoteSelection(e, note)}
                value="D#"
              >
                D#
              </NoteSelection>
              <NoteSelection
                onClick={e => this.handleNoteSelection(e, note)}
                value="E"
              >
                E
              </NoteSelection>
              <NoteSelection
                onClick={e => this.handleNoteSelection(e, note)}
                value="F"
              >
                F
              </NoteSelection>
              <NoteSelection
                onClick={e => this.handleNoteSelection(e, note)}
                value="F#"
              >
                F#
              </NoteSelection>
              <NoteSelection
                onClick={e => this.handleNoteSelection(e, note)}
                value="G"
              >
                G
              </NoteSelection>
              <NoteSelection
                onClick={e => this.handleNoteSelection(e, note)}
                value="G#"
              >
                G#
              </NoteSelection>
            </>
          )}{" "}
          {isSelectionCorrect != null && (
            <ResultEmoji isCorrect={isSelectionCorrect} />
          )}
        </div>
        <div>
          <button onClick={this.getNextFretNote}>Next</button>
        </div>
      </>
    );
  }
}
