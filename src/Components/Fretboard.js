import * as React from "react";
import styled from "styled-components";
import { FRET_NOTES } from "./notes";

const KeyValue = styled.span`
  padding-right: 8px;
`;

const StringFret = styled.span`
  font-size: 42px;
`;

const Button = styled.button`
  font-size: 42px;
  width: 72px;
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
              fretNote["note"]
            ) : (
              <>
                <div>
                  <Button
                    onClick={e => this.handleNoteSelection(e, note)}
                    value="A"
                  >
                    A
                  </Button>
                  <Button
                    onClick={e => this.handleNoteSelection(e, note)}
                    value="A#"
                  >
                    A#
                  </Button>
                  <Button
                    onClick={e => this.handleNoteSelection(e, note)}
                    value="B"
                  >
                    B
                  </Button>
                  <Button
                    onClick={e => this.handleNoteSelection(e, note)}
                    value="C"
                  >
                    C
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={e => this.handleNoteSelection(e, note)}
                    value="C#"
                  >
                    C#
                  </Button>
                  <Button
                    onClick={e => this.handleNoteSelection(e, note)}
                    value="D"
                  >
                    D
                  </Button>
                  <Button
                    onClick={e => this.handleNoteSelection(e, note)}
                    value="D#"
                  >
                    D#
                  </Button>
                  <Button
                    onClick={e => this.handleNoteSelection(e, note)}
                    value="E"
                  >
                    E
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={e => this.handleNoteSelection(e, note)}
                    value="F"
                  >
                    F
                  </Button>
                  <Button
                    onClick={e => this.handleNoteSelection(e, note)}
                    value="F#"
                  >
                    F#
                  </Button>
                  <Button
                    onClick={e => this.handleNoteSelection(e, note)}
                    value="G"
                  >
                    G
                  </Button>
                  <Button
                    onClick={e => this.handleNoteSelection(e, note)}
                    value="G#"
                  >
                    G#
                  </Button>
                </div>
              </>
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
