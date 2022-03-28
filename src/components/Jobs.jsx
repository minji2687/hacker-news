import styled from "@emotion/styled";
import SimpleCard from "./card/SimpleCard";
import MainContentWrap from "./MainContentWrap";
import MainBanner from "./MainBanner";
import { CardList } from "./CardList";
import jobsMainBanner from "../assets/jobsMainBanner.svg";
import SubTitle from "./SubTitle";
import listOn from "../assets/listOn.svg";
import listOff from "../assets/listOff.svg";
import squareOff from "../assets/squareOff.svg";
import squareOn from "../assets/squareOn.svg";
import MiddleBigCard from "./card/MiddleBigCard";
import { useState } from "react";
import React from "react";

const JobsListInfo = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-right: 4%;
`;

const JobsCardList = styled(CardList)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ listFormat }) =>
    listFormat === "list" ? "column" : "row"};
  justify-content: start;
  padding: 0;
  padding-top: 18px;
`;

const ListFormatIcon = styled.span`
  width: 30px;
  height: 30px;
  display: inline-block;
  background: url(${({ format, listFormatState }) =>
      selectListFormatIcon(format, listFormatState)})
    no-repeat;
`;
function selectListFormatIcon(format, listFormatState) {
  console.log(listFormatState);
  if (format === "list" && listFormatState === "list") {
    return listOn;
  } else if (format === "list" && listFormatState === "square") {
    return listOff;
  } else if (format === "square" && listFormatState === "list") {
    console.log("squareOff");
    return squareOff;
  } else if (format === "square" && listFormatState === "square") {
    return squareOn;
  }
}

export default function Jobs({ jobsData }) {
  const [listFormat, setListFormat] = useState("list");

  function handleListFormatToList() {
    setListFormat("list");
  }

  function handleListFormatToSquare() {
    setListFormat("square");
  }

  return (
    <MainContentWrap>
      <MainBanner background={jobsMainBanner} />
      <JobsListInfo>
        <SubTitle>Jobs</SubTitle>
        <div>
          <ListFormatIcon
            onClick={handleListFormatToList}
            format={"list"}
            listFormatState={listFormat}
          ></ListFormatIcon>
          <ListFormatIcon
            onClick={handleListFormatToSquare}
            format={"square"}
            listFormatState={listFormat}
          ></ListFormatIcon>
        </div>
      </JobsListInfo>
      <JobsCardList>
        {jobsData.map((item, index) => {
          if (listFormat === "list" && (index + 1) % 6 === 0) {
            return <MiddleBigCard data={item.data} key={item.data.id} />;
          }

          if (listFormat === "list") {
            return (
              <SimpleCard shape={"list"} data={item.data} key={item.data.id} />
            );
          }
          return (
            <SimpleCard shape={"square"} data={item.data} key={item.data.id} />
          );
        })}
      </JobsCardList>
    </MainContentWrap>
  );
}
