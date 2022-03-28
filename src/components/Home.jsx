import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import TopCard from "./card/TopCard";
import ShowHomeCard from "./card/ShowHomeCard";
import RankerCard from "./card/RankerCard";
import SquareCard from "./card/SquareCard";
import HomeNewCard from "./card/HomeNewCard";
import CommentModalContainer from "../containers/CommentModalContainer";
import HomeJobCard from "./card/HomeJobCard";

const HomeWrap = styled.main`
  background: #656565;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 83px;
`;
const HomeInnerWrap = styled.div`
  padding-right: 20px;
`;

const HomeSubTitle = styled.h2`
  text-shadow: 0px 4px 4px #000000;
  color: #ffffff;
  font-size: 36px;
  line-height: 138.19%;
  display: flex;
  align-items: flex-end;
  height: 59px;
  margin: 10px 0;
`;

const HorizontalCardList = styled.div`
  width: 100%;
  overflow: scroll;
`;

const HorizontalCardListInnerWrap = styled.div`
  display: flex;
  width: 5000px;
  & > div + div {
    margin-left: 10px;
  }
`;

export default function Home({
  topData,
  newsData,
  showData,
  askData,
  jobsData,
}) {
  const [modalData, setModalData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  function clickModal(data) {
    setModalData(data);
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }
  return (
    <>
      <HomeWrap>
        <HomeSubTitle>Ranker</HomeSubTitle>
        <HorizontalCardList>
          <HorizontalCardListInnerWrap>
            {showData.map(({ data }, index) => {
              if (index > 2) {
                return;
              }
              return (
                <RankerCard data={data} key={data.id} clickModal={clickModal} />
              );
            })}
          </HorizontalCardListInnerWrap>
        </HorizontalCardList>
        <HomeSubTitle>TOP</HomeSubTitle>
        <HorizontalCardList>
          <HorizontalCardListInnerWrap>
            {topData.map(({ data }, index) => {
              return (
                <TopCard
                  data={data}
                  key={data.id}
                  ranking={index + 1}
                  clickModal={clickModal}
                />
              );
            })}
          </HorizontalCardListInnerWrap>
        </HorizontalCardList>
        <HomeInnerWrap>
          <HomeSubTitle>NEW</HomeSubTitle>
          {newsData.map(({ data }, index) => {
            if (index > 2) {
              return;
            }
            return (
              <HomeNewCard data={data} key={data.id} clickModal={clickModal} />
            );
          })}
        </HomeInnerWrap>
        <HomeSubTitle>SHOW</HomeSubTitle>
        <HorizontalCardList>
          <HorizontalCardListInnerWrap>
            {showData.map(({ data }) => {
              return (
                <ShowHomeCard
                  data={data}
                  key={data.id}
                  clickModal={clickModal}
                />
              );
            })}
          </HorizontalCardListInnerWrap>
        </HorizontalCardList>

        <HomeSubTitle>ASK</HomeSubTitle>
        <HorizontalCardList>
          <HorizontalCardListInnerWrap>
            {askData.map(({ data }) => {
              return (
                <SquareCard data={data} key={data.id} clickModal={clickModal} />
              );
            })}
          </HorizontalCardListInnerWrap>
        </HorizontalCardList>
        <HomeInnerWrap>
          <HomeSubTitle>JOBS</HomeSubTitle>
          {jobsData.map(({ data }, index) => {
            if (index > 2) {
              return;
            }
            return (
              <HomeJobCard data={data} key={data.id} clickModal={clickModal} />
            );
          })}
        </HomeInnerWrap>
      </HomeWrap>
      <CommentModalContainer
        itemData={modalData}
        openModal={openModal}
        closeModal={closeModal}
      />
    </>
  );
}
