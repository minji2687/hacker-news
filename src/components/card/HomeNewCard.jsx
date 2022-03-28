import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import React from "react";

import {
  CardWrap,
  CardInfo,
  Ranking,
  Writer,
  CreatedDate,
  CardDoc,
  Title,
} from "./Card";
import CardAdditionalInfo from "./CardAdditionalInfo";
import { convertDateForm, newCardProfileImg } from "../../util";

const HomeNewCardInfo = styled(CardInfo)`
  background: #ffedab;
  border: 1px solid rgba(0, 0, 0, 0.3);
  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const UserProfile = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background: url(${({ defaultProfile }) => defaultProfile}) no-repeat center;
`;

const CardDocInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;

export default function HomeNewCard({ data, clickModal }) {
  return (
    <CardWrap>
      <HomeNewCardInfo>
        <Link to={`/user/${data.by}`}>
          <UserProfile defaultProfile={newCardProfileImg()}></UserProfile>
          <Writer>{data.by}</Writer>
        </Link>
      </HomeNewCardInfo>
      <CardDoc>
        <Title>
          <Link to={`/ask/${data.id}`} key={data.id}>
            {data.title}
          </Link>
        </Title>
        <CardDocInfo>
          <CardAdditionalInfo
            data={data}
            scoreNum={data.score}
            commentNum={data.descendants}
            clickModal={clickModal}
          />
          <CreatedDate>{convertDateForm(data.time)}</CreatedDate>
        </CardDocInfo>
      </CardDoc>
    </CardWrap>
  );
}
