import * as React from "react";
import styled from "styled-components";

const LargeElement = styled.span`
  font-size: 42px;
`;

function getEmoji(score) {
  if (score === 0) {
    return "🤬";
  } else if (score < 3) {
    return "😑";
  } else if (score < 5) {
    return "😐";
  } else if (score < 10) {
    return "🙂";
  } else if (score < 15) {
    return "😊";
  } else if (score < 20) {
    return "😀";
  } else if (score < 25) {
    return "😁";
  } else if (score < 30) {
    return "🤠";
  } else {
    return "🤩";
  }
}

export default class ScoreKeeper extends React.Component {
  render() {
    const { score } = this.props;
    return (
      <>
        <LargeElement>{score}</LargeElement>points{" "}
        <LargeElement>{getEmoji(score)}</LargeElement>
      </>
    );
  }
}
