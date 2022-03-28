import React from "react";
import styled from "@emotion/styled";
import about from "../assets/about.svg";

const AboutWrap = styled.div`
  padding: 51px 4% 0;
  background: url(${about}) no-repeat;
  background-position: 104px 380px;
  height: calc(100vh - 83px);
`;
const AboutText = styled.div`
  font-family: Newsreader;
  font-style: italic;
  font-size: 25px;
  line-height: 138.19%;
  letter-spacing: 0.025em;
  color: #000000;
`;
const Footer = styled.footer`
  position: absolute;
  bottom: 15px;
  p {
    line-height: 138.19%;
    text-align: center;
    margin-bottom: 7px;
  }
`;
const Copyright = styled.p`
  color: #656565;
`;

export default function About() {
  return (
    <AboutWrap>
      <AboutText>
        Hi, Developers. We are always trying to make good services. Thanks for
        coming and have a good day :)
      </AboutText>
      <Footer>
        <p>UX/UI design team: 신소영,최정윤</p>
        <p>Developer team: 권은서, 이장훈, 정윤재,조민지, 지은영</p>
        <Copyright>
          copyrights.2022. 2. HACKER NEWS. All rights reserved.
        </Copyright>
      </Footer>
    </AboutWrap>
  );
}
