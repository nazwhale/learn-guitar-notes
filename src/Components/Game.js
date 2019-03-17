import * as React from "react";
import styled from "styled-components";

import { palette } from "../theme";
import { FRET_NOTES } from "./notes";
import Fretboard from "./Fretboard";
import ScoreKeeper from "./ScoreKeeper";

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

function calculateScore(currentScore, challengeNote, selection) {
  if (challengeNote === selection) {
    return currentScore + 1;
  } else {
    return 0;
  }
}

export default class Game extends React.Component {
  state = {
    isConfirmationState: false,
    fretNote: {},
    lastNoteSelected: "",
    score: 0
  };

  componentDidMount = () => {
    this.getRandomFretNote();
  };

  getNextFretNote = () => {
    this.setState({ isConfirmationState: false });
    this.getRandomFretNote();
  };

  getRandomFretNote = () => {
    const index = getRandomInt(FRET_NOTES.length - 1);
    const fretNote = FRET_NOTES[index];
    this.setState({ fretNote });
  };

  handleNoteSelection = (e, challengeNote) => {
    const score = calculateScore(
      this.state.score,
      challengeNote,
      e.target.value
    );

    this.setState({
      lastNoteSelected: e.target.value,
      isConfirmationState: true,
      score
    });
  };

  render() {
    const {
      fretNote,
      isConfirmationState,
      lastNoteSelected,
      score
    } = this.state;
    const challengeNoteName = fretNote["name"];

    return (
      <>
        <ScoreKeeper score={score} />
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
