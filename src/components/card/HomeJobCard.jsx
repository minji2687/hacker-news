import styled from "@emotion/styled";
import { convertDateForm } from "../../util";
import React from "react";

import {
  SimpleCardWrap,
  SimpleCardTitle,
  SimpleCardInfo,
  SimpleCardCreatedDate,
} from "./SimpleCard";

const HomeSimpleCardWrap = styled(SimpleCardWrap)`
  width: 100%;
  margin: 0 0 10px 0;
  &:nth-of-type(even) {
    margin: 0 0 10px 0;
  }
`;

const JobsURl = styled.div`
  padding: 4px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  border: 1px solid #000000;
  margin: 10px auto;
  line-height: 135%;
`;

const HomeJobCardInfo = styled(SimpleCardInfo)`
  justify-content: start;
`;

export default function HomeJobCard({ data }) {
  return (
    <HomeSimpleCardWrap shape="list">
      <JobsURl>
        <span>reverielabs.com</span>
      </JobsURl>

      <div>
        <SimpleCardTitle shape="list">{data.title}</SimpleCardTitle>
        <HomeJobCardInfo shape="list">
          <SimpleCardCreatedDate>
            {convertDateForm(data.time)}
          </SimpleCardCreatedDate>
        </HomeJobCardInfo>
      </div>
    </HomeSimpleCardWrap>
  );
}
