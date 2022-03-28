import styled from "@emotion/styled";
import CardAdditionalInfo from "./CardAdditionalInfo";
import { CardDoc, Title, CreatedDate } from "./Card";
import profile from "../../assets/profile.svg";
import { convertDateForm, newCardProfileImg } from "../../util";
import React from "react";

import {
  ShowCardWrap,
  ShowUserInfo,
  ShowCardInfo,
  ShowUserName,
} from "./ShowCard";

const ShowHomeCardWrap = styled(ShowCardWrap)`
  flex-direction: column;
  width: 168px;
  height: 188px;
  align-items: center;
  padding-top: 6px;
`;

const ShowHomeTitle = styled(Title)`
  text-align: center;
  font-size: 16px;
  min-height: 66px;
`;

const ShowHomeUserInfo = styled(ShowUserInfo)`
  flex-direction: row;
  margin: 6px 0;
`;

const ShowHomeCreatedDate = styled(CreatedDate)`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 8px;
`;

const UserProfile = styled.span`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
  border: 0.293333px solid rgba(0, 0, 0, 0.6);
  background: url(${({ userProfileImg }) => userProfileImg}) no-repeat center;
  background-size: 35px;
  margin-right: 3px;
`;

export default function ShowHomeCard({ data, clickModal }) {
  return (
    <ShowHomeCardWrap>
      <ShowHomeCreatedDate>{convertDateForm(data.time)}</ShowHomeCreatedDate>
      <ShowHomeTitle>{data.title}</ShowHomeTitle>
      <ShowHomeUserInfo>
        <UserProfile userProfileImg={newCardProfileImg()}></UserProfile>
        <ShowUserName>{data.by}</ShowUserName>
      </ShowHomeUserInfo>
      <CardAdditionalInfo
        data={data}
        scoreNum={data.score}
        commentNum={data.descendants}
        clickModal={clickModal}
      />
    </ShowHomeCardWrap>
  );
}
