import styled from "@emotion/styled";
import CardAdditionalInfo from "./CardAdditionalInfo";
import MiddlebigCardPicture from "../../assets/MiddlebigCardPicture.svg";
import React from "react";

export const MiddleBigCardWrap = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 399px;
  background: #fff;
  margin-bottom: 17px;
`;
export const CardPicture = styled.div`
  height: 223px;
  background: gray;
  background: url(${({ picture }) => picture}) no-repeat;
  background-size: cover;
  background-position: center;
`;
export const MiddleCardInfo = styled.div`
  padding: 19px 25px;
  line-height: 138.19%;
  div {
    display: flex;
    justify-content: space-between;
  }
`;
export const MiddleCardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 25px;
  line-height: 40px;

  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserID = styled.div`
  color: rgba(0, 0, 0, 0.6);
`;
export default function MiddleBigCard({ data }) {
  return (
    <MiddleBigCardWrap>
      <CardPicture picture={MiddlebigCardPicture} />
      <MiddleCardInfo>
        <MiddleCardTitle>{data.title}</MiddleCardTitle>
        <div>
          <UserID>{data.by}</UserID>
          <CardAdditionalInfo
            scoreNum={data.score}
            commentNum={data.descendants}
          />
        </div>
      </MiddleCardInfo>
    </MiddleBigCardWrap>
  );
}
