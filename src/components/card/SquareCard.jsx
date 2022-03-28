import styled from "@emotion/styled";
import { CardWrap, Writer, CreatedDate, Title } from "./Card";
import CardAdditionalInfo from "./CardAdditionalInfo";
import { Link } from "react-router-dom";
import { convertDateForm } from "../../util";
import React from "react";

const SquareCardWrap = styled(CardWrap)`
  width: 175px;
  height: 217px;
  flex-direction: column;
  padding: 5px;
  align-items: center;
`;
const SquareCardTitle = styled(Title)`
  text-align: center;
  -webkit-line-clamp: 4;
  margin-top: 8px;
  height: 99px;
`;

const SquareCardWriter = styled(Writer)`
  display: block;
  margin: 7px 0;
  line-height: 30px;
`;
const SquareCardCreatedDate = styled(CreatedDate)`
  font-size: 16px;
`;
export default function SquareCard({ data, clickModal }) {
  return (
    <SquareCardWrap>
      <SquareCardCreatedDate>
        {convertDateForm(data.time)}
      </SquareCardCreatedDate>
      <SquareCardTitle>
        <Link to={`/ask/${data.id}`} key={data.id}>
          {data.title}
        </Link>
      </SquareCardTitle>
      <SquareCardWriter>{data.by}</SquareCardWriter>
      <CardAdditionalInfo
        data={data}
        scoreNum={data.score}
        commentNum={data.descendants}
        clickModal={clickModal}
      />
    </SquareCardWrap>
  );
}
