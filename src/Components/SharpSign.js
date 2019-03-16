import * as React from "react";
import styled from "styled-components";

const SharpStyle = styled.span`
  font-size: 24px;
  pointer-events: none;
`;

export default function SharpSign() {
  return <SharpStyle>#</SharpStyle>;
}
