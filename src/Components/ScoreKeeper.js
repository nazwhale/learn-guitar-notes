import * as React from "react";
import styled from "styled-components";

const Score = styled.span`
  font-size: 42px;
`;

export default class ScoreKeeper extends React.Component {
  render() {
    const { score } = this.props;
    return (
      <>
        <Score>{score}</Score>points
      </>
    );
  }
}
