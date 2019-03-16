import * as React from "react";
import styled from "styled-components";

import SharpSign from "./SharpSign";

const Button = styled.button`
  font-size: 42px;
  width: 72px;
`;

export default function Fretboard({ handleNoteSelection, challengeNote }) {
  return (
    <>
      <div>
        <Button onClick={e => handleNoteSelection(e, challengeNote)} value="A">
          A
        </Button>
        <Button onClick={e => handleNoteSelection(e, challengeNote)} value="A#">
          A<SharpSign />
        </Button>
        <Button onClick={e => handleNoteSelection(e, challengeNote)} value="B">
          B
        </Button>
        <Button onClick={e => handleNoteSelection(e, challengeNote)} value="C">
          C
        </Button>
      </div>
      <div>
        <Button onClick={e => handleNoteSelection(e, challengeNote)} value="C#">
          C<SharpSign />
        </Button>
        <Button onClick={e => handleNoteSelection(e, challengeNote)} value="D">
          D
        </Button>
        <Button onClick={e => handleNoteSelection(e, challengeNote)} value="D#">
          D<SharpSign />
        </Button>
        <Button onClick={e => handleNoteSelection(e, challengeNote)} value="E">
          E
        </Button>
      </div>
      <div>
        <Button onClick={e => handleNoteSelection(e, challengeNote)} value="F">
          F
        </Button>
        <Button onClick={e => handleNoteSelection(e, challengeNote)} value="F#">
          F<SharpSign />
        </Button>
        <Button onClick={e => handleNoteSelection(e, challengeNote)} value="G">
          G
        </Button>
        <Button onClick={e => handleNoteSelection(e, challengeNote)} value="G#">
          G<SharpSign />
        </Button>
      </div>
    </>
  );
}
