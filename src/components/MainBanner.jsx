import styled from "@emotion/styled";
import React from "react";

const MainBannerWrap = styled.div`
  border-bottom: 1px solid #eeeeee;
  img {
    width: 100%;
  }
`;

export default function MainBanner({ background }) {
  return (
    <MainBannerWrap>
      <img src={background} alt="메인배너" />
    </MainBannerWrap>
  );
}
