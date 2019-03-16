import * as React from "react";
import styled from "styled-components";

import { palette } from "../theme";
import SharpSign from "./SharpSign";

const Button = styled.button`
  font-size: 42px;
  width: 72px;
  outline: none;
  border: 1px solid ${palette.darkGrey}
  color: ${palette.black};
  background-color: ${props =>
    chooseColor(
      props.isConfirmationState,
      props.challengeNote,
      props.value,
      props.lastNoteSelected
    )};

  &:disabled {
    color: ${palette.black};
  }
`;

function chooseColor(
  isConfirmationState,
  challengeNote,
  value,
  lastNoteSelected
) {
  if (challengeNote == null || !isConfirmationState) {
    return palette.paleGrey;
  }

  const isNoteCorrect = challengeNote === value;
  const isNoteChosen = lastNoteSelected === value;

  if (isNoteCorrect && isNoteChosen) return palette.green;
  if (isNoteCorrect) return palette.lightGreen;
  if (isNoteChosen) return palette.lightRed;

  return palette.paleGrey;
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
            onClick={handleNoteSelection}
            value="A"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
            disabled={isConfirmationState}
          >
            A
          </Button>
          <Button
            onClick={handleNoteSelection}
            value="A#"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
            disabled={isConfirmationState}
          >
            A<SharpSign />
          </Button>
          <Button
            onClick={handleNoteSelection}
            value="B"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
            disabled={isConfirmationState}
          >
            B
          </Button>
          <Button
            onClick={handleNoteSelection}
            value="C"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
            disabled={isConfirmationState}
          >
            C
          </Button>
        </div>
        <div>
          <Button
            onClick={handleNoteSelection}
            value="C#"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
            disabled={isConfirmationState}
          >
            C<SharpSign />
          </Button>
          <Button
            onClick={handleNoteSelection}
            value="D"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
            disabled={isConfirmationState}
          >
            D
          </Button>
          <Button
            onClick={handleNoteSelection}
            value="D#"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
            disabled={isConfirmationState}
          >
            D<SharpSign />
          </Button>
          <Button
            onClick={handleNoteSelection}
            value="E"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
            disabled={isConfirmationState}
          >
            E
          </Button>
        </div>
        <div>
          <Button
            onClick={handleNoteSelection}
            value="F"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
            disabled={isConfirmationState}
          >
            F
          </Button>
          <Button
            onClick={handleNoteSelection}
            value="F#"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
            disabled={isConfirmationState}
          >
            F<SharpSign />
          </Button>
          <Button
            onClick={handleNoteSelection}
            value="G"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
            disabled={isConfirmationState}
          >
            G
          </Button>
          <Button
            onClick={handleNoteSelection}
            value="G#"
            challengeNote={challengeNote}
            isConfirmationState={isConfirmationState}
            lastNoteSelected={lastNoteSelected}
            disabled={isConfirmationState}
          >
            G<SharpSign />
          </Button>
        </div>
      </>
    );
  }
}
