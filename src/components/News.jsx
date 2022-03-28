import styled from "@emotion/styled";
import Card from "./card/Card";
import SubTitle from "./SubTitle";
import newsMainBanner from "../assets/newsMainBanner.svg";
import MainBanner from "./MainBanner";
import MainContentWrap from "./MainContentWrap";
import { CardList } from "./CardList";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { getNewsSagaStart } from "../redux/modules/news";
import CommentModalContainer from "../containers/CommentModalContainer";
import React from "react";

const ObserverEl = styled.div``;

export default function News({ newsData }) {
  // 모달 로직
  const [modalData, setModalData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  function clickModal(data) {
    setModalData(data);
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }

  // 무한 스크롤 로직
  const ObserverRef = useRef(null);
  const dispatch = useDispatch();

  const options = {
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entry, observer) => {
      if (entry[0].intersectionRatio > 0) {
        dispatch(getNewsSagaStart());
      }
    }, options);
    observer.observe(ObserverRef.current);
  }, []);

  return (
    <MainContentWrap>
      <MainBanner background={newsMainBanner} />
      <SubTitle>TOP 10</SubTitle>
      <CardList>
        {newsData.map((item, index) => (
          <Card
            data={item.data}
            ranking={index + 1}
            key={`NEWS-${item.data.id}-${index}`}
            clickModal={clickModal}
          />
        ))}
        <ObserverEl ref={ObserverRef} />
      </CardList>
      <CommentModalContainer
        itemData={modalData}
        openModal={openModal}
        closeModal={closeModal}
      />
    </MainContentWrap>
  );
}
