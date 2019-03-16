import * as React from "react";
import styled from "styled-components";

import { palette } from "../theme";
import { FRET_NOTES } from "./notes";
import Fretboard from "./Fretboard";

const KeyValue = styled.span`
  padding-right: 8px;
`;

const StringFret = styled.span`
  font-size: 42px;
`;

const NextButton = styled.button`
  font-size: 42px;
  background-color: ${palette.paleGrey}

  &:disabled {
    background-color: ${palette.paleGrey};
  }
`;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default class Game extends React.Component {
  state = {
    isConfirmationState: false,
    fretNote: {},
    isSelectionCorrect: null,
    lastNoteSelected: ""
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
    this.setState({ isConfirmationState: false, isSelectionCorrect: null });
    this.getRandomFretNote();
  };

  revealAnswer = () => {
    this.setState({ isConfirmationState: true });
  };

  handleNoteSelection = (e, note) => {
    const lastNoteSelected = e.target.value;
    const isSelectionCorrect = this.isSelectionCorrect(lastNoteSelected, note);
    this.setState({ isSelectionCorrect, lastNoteSelected });
    this.revealAnswer();
  };

  isSelectionCorrect = (selection, note) => {
    return selection === note;
  };

  render() {
    const { fretNote, isConfirmationState, lastNoteSelected } = this.state;
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
          <Fretboard
            challengeNote={challengeNoteName}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
            handleNoteSelection={this.handleNoteSelection}
          />
        </div>
        <div>
          <NextButton
            onClick={this.getNextFretNote}
            style={{ margin: "16px 0" }}
            disabled={!isConfirmationState}
          >
            Next
          </NextButton>
        </div>
      </>
    );
  }
}
