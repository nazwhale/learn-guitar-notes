import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 42px;
  width: 72px;
`;

export default function Fretboard({ handleNoteSelection, note }) {
  return (
    <>
      <div>
        <Button onClick={e => handleNoteSelection(e, note)} value="A">
          A
        </Button>
        <Button onClick={e => handleNoteSelection(e, note)} value="A#">
          A#
        </Button>
        <Button onClick={e => handleNoteSelection(e, note)} value="B">
          B
        </Button>
        <Button onClick={e => handleNoteSelection(e, note)} value="C">
          C
        </Button>
      </div>
      <div>
        <Button onClick={e => handleNoteSelection(e, note)} value="C#">
          C#
        </Button>
        <Button onClick={e => handleNoteSelection(e, note)} value="D">
          D
        </Button>
        <Button onClick={e => handleNoteSelection(e, note)} value="D#">
          D#
        </Button>
        <Button onClick={e => handleNoteSelection(e, note)} value="E">
          E
        </Button>
      </div>
      <div>
        <Button onClick={e => handleNoteSelection(e, note)} value="F">
          F
        </Button>
        <Button onClick={e => handleNoteSelection(e, note)} value="F#">
          F#
        </Button>
        <Button onClick={e => handleNoteSelection(e, note)} value="G">
          G
        </Button>
        <Button onClick={e => handleNoteSelection(e, note)} value="G#">
          G#
        </Button>
      </div>
    </>
  );
}
