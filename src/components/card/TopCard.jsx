import styled from "@emotion/styled";
import { convertDateForm } from "../../util";
import { Title, CardWrap, CreatedDate } from "./Card";
import CardAdditionalInfo from "./CardAdditionalInfo";
import React from "react";

const TopCardWrap = styled(CardWrap)`
  width: 322px;
  height: 297px;
  border: 1px solid #000000;
  position: relative;
  overflow: hidden;
`;
const CardInfo = styled.div`
  z-index: 1;
  flex-direction: column;
  padding: 25px 12px 0 12px;
  width: 100%;
`;

const TopTitle = styled(Title)`
  text-align: center;
  margin-bottom: 31px;
  font-size: 20px;
  line-height: 162.19%;
`;

const TopCreatedDate = styled(CreatedDate)`
  display: block;
  text-align: right;
  margin-bottom: 29px;
  font-weight: 600;
  font-size: 16px;
`;

const IdSection = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #000000;
  height: 46px;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const BackgroundNum = styled.div`
  text-align: right;
  letter-spacing: -0.01em;
  color: #fff4cc;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 600;
  font-size: 144px;
  width: 100%;
  position: absolute;
  text-align: left;
  padding-left: 19px;
  z-index: 0;
`;

export default function TopCard({ data, ranking, clickModal }) {
  return (
    <TopCardWrap>
      <BackgroundNum>{ranking}</BackgroundNum>
      <CardInfo>
        <TopCreatedDate>{convertDateForm(data.time)}</TopCreatedDate>
        <TopTitle>{data.title}</TopTitle>
        <CardAdditionalInfo
          data={data}
          scoreNum={data.score}
          commentNum={data.descendants}
          clickModal={clickModal}
        />
        <IdSection>{data.by}</IdSection>
      </CardInfo>
    </TopCardWrap>
  );
}
