import * as React from "react";
import styled from "styled-components";

import { palette } from "../theme";
import SharpSign from "./SharpSign";

const Button = styled.button`
  font-size: 42px;
  width: 72px;
  outline: none;
  background-color: ${props =>
    chooseColor(
      props.isConfirmationState,
      props.challengeNote,
      props.value,
      props.lastNoteSelected
    )};
`;

function chooseColor(
  isConfirmationState,
  challengeNote,
  value,
  lastNoteSelected
) {
  if (challengeNote == null || !isConfirmationState) {
    return palette.white;
  }

  const isNoteCorrect = challengeNote === value;
  const isNoteChosen = lastNoteSelected === value;

  if (isNoteCorrect && isNoteChosen) return palette.green;
  if (isNoteCorrect) return palette.lightGreen;
  if (isNoteChosen) return palette.lightRed;
}

export default class Fretboard extends React.Component {
  render() {
    const {
      handleNoteSelection,
      challengeNote,
      isConfirmationState,
      lastNoteSelected
    } = this.props;

    return (
      <>
        <div>
          <Button
            onClick={e => handleNoteSelection(e, challengeNote)}
            value="A"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
          >
            A
          </Button>
          <Button
            onClick={e => handleNoteSelection(e, challengeNote)}
            value="A#"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
          >
            A<SharpSign />
          </Button>
          <Button
            onClick={e => handleNoteSelection(e, challengeNote)}
            value="B"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
          >
            B
          </Button>
          <Button
            onClick={e => handleNoteSelection(e, challengeNote)}
            value="C"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
          >
            C
          </Button>
        </div>
        <div>
          <Button
            onClick={e => handleNoteSelection(e, challengeNote)}
            value="C#"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
          >
            C<SharpSign />
          </Button>
          <Button
            onClick={e => handleNoteSelection(e, challengeNote)}
            value="D"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
          >
            D
          </Button>
          <Button
            onClick={e => handleNoteSelection(e, challengeNote)}
            value="D#"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
          >
            D<SharpSign />
          </Button>
          <Button
            onClick={e => handleNoteSelection(e, challengeNote)}
            value="E"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
          >
            E
          </Button>
        </div>
        <div>
          <Button
            onClick={e => handleNoteSelection(e, challengeNote)}
            value="F"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
          >
            F
          </Button>
          <Button
            onClick={e => handleNoteSelection(e, challengeNote)}
            value="F#"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
          >
            F<SharpSign />
          </Button>
          <Button
            onClick={e => handleNoteSelection(e, challengeNote)}
            value="G"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
          >
            G
          </Button>
          <Button
            onClick={e => handleNoteSelection(e, challengeNote)}
            value="G#"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
          >
            G<SharpSign />
          </Button>
        </div>
      </>
    );
  }
}
