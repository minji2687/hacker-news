import styled from "@emotion/styled";
import React from "react";

const MainContent = styled.section`
  background: #656565;
  padding-bottom: 83px;
  min-height: calc(100vh - 84px);
`;

export default function MainContentWrap({ children }) {
  return <MainContent>{children}</MainContent>;
}
