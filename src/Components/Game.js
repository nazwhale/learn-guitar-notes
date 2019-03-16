import * as React from "react";
import styled from "styled-components";

import { FRET_NOTES } from "./notes";
import SharpSign from "./SharpSign";
import Fretboard from "./Fretboard";

const KeyValue = styled.span`
  padding-right: 8px;
`;

const StringFret = styled.span`
  font-size: 42px;
`;

const NextButton = styled.button`
  font-size: 42px;
`;

const Answer = styled.span`
  font-size: 42px;
`;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const NoteDisplay = ({ note, isSharp }) => {
  if (isSharp) {
    return (
      <>
        <span>{note}</span>
        <SharpSign />
      </>
    );
  }
  return <span>{note}</span>;
};

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

export default class Game extends React.Component {
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
    console.log("value", selection);
    console.log("challengeNote", note);
    const isSelectionCorrect = this.isSelectionCorrect(selection, note);
    this.setState({ isSelectionCorrect });
    this.revealAnswer();
  };

  isSelectionCorrect = (selection, note) => {
    return selection === note;
  };

  render() {
    const { fretNote, isAnswerRevealed, isSelectionCorrect } = this.state;
    const challengeNoteName = fretNote["name"];

    return (
      <>
        <p>
          <KeyValue>
            <StringFret>{fretNote["string"]}</StringFret>
            string
          </KeyValue>
          <KeyValue>
            <StringFret>{fretNote["fret"]}</StringFret>fret
          </KeyValue>
        </p>
        <div>
          <Answer>
            {isAnswerRevealed ? (
              <NoteDisplay
                note={fretNote["note"]}
                isSharp={fretNote["sharp"]}
              />
            ) : (
              <Fretboard
                challengeNote={challengeNoteName}
                handleNoteSelection={this.handleNoteSelection}
              />
            )}{" "}
            {isSelectionCorrect != null && (
              <ResultEmoji isCorrect={isSelectionCorrect} />
            )}
          </Answer>
        </div>
        <div>
          {isAnswerRevealed && (
            <NextButton
              onClick={this.getNextFretNote}
              style={{ margin: "16px 0" }}
            >
              Next
            </NextButton>
          )}
        </div>
      </>
    );
  }
}
