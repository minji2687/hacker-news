import styled from "@emotion/styled";
import { CardWrap, CardInfo, CardDoc, Title } from "./Card";
import React from "react";
import { UserInfo, UserName } from "../Comment";
import { AdditionalInfo, PointNum, CommentNum } from "./CardAdditionalInfo";
import { newCardProfileImg } from "../../util";

export const ShowCardWrap = styled(CardWrap)`
  height: 106px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
`;

export const ShowUserInfo = styled(UserInfo)`
  flex-direction: column;
  img {
    height: 30px;
    width: 30px;
    margin-bottom: 8.5px;
  }
`;

export const ShowCardInfo = styled(CardInfo)`
  width: 21%;
`;

export const ShowUserName = styled(UserName)`
  color: rgba(0, 0, 0, 0.6);
  opacity: 0.5;
`;

export const ShowTitle = styled(Title)`
  font-size: 14px;
  line-height: 138.19%;
  -webkit-line-clamp: 2;
  min-height: auto;
`;

export const ShowAdditionalInfo = styled(AdditionalInfo)`
  justify-content: start;
  margin-left: -2px;
`;

export const ShowPointNum = styled(PointNum)`
  background-size: 23px;
  padding-left: 28px;
  font-size: 11.6471px;
`;

export const ShowCommentNum = styled(CommentNum)`
  background-size: 23px;
  font-size: 11.6471px;
  cursor: pointer;
`;

export default function ShowCard({ data, clickModal }) {
  return (
    <ShowCardWrap>
      <ShowCardInfo>
        <ShowUserInfo>
          <img src={newCardProfileImg()} alt="profile" />
          <ShowUserName>{data.by}</ShowUserName>
        </ShowUserInfo>
      </ShowCardInfo>
      <CardDoc>
        <ShowTitle>{data.title}</ShowTitle>
        <ShowAdditionalInfo>
          <ShowPointNum>
            <span>{data.score}</span>
          </ShowPointNum>
          <ShowCommentNum onClick={() => clickModal(data)}>
            <span>{data.descendants}</span>
          </ShowCommentNum>
        </ShowAdditionalInfo>
      </CardDoc>
    </ShowCardWrap>
  );
}
