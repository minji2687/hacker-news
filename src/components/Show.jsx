import ShowCard from "./card/ShowCard";
import MainContentWrap from "./MainContentWrap";
import MainBanner from "./MainBanner";
import ShowMainBanner from "../assets/showMainBanner.svg";
import { CardList } from "./CardList";
import CommentModalContainer from "../containers/CommentModalContainer";
import { useState, useEffect, useRef } from "react";
import MiddleBigCard from "./card/MiddleBigCard";
import { useDispatch } from "react-redux";
import { getShowSagaStart } from "../redux/modules/show";
import styled from "@emotion/styled";

export default function Show({ showData }) {
  const [modalData, setModalData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  function clickModal(data) {
    setModalData(data);
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }

  const ObserverRef = useRef(null);
  const dispatch = useDispatch();

  const options = {
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entry, observer) => {
      if (entry[0].intersectionRatio > 0) {
        dispatch(getShowSagaStart());
      }
    }, options);
    observer.observe(ObserverRef.current);
  }, []);

  return (
    <MainContentWrap>
      <MainBanner background={ShowMainBanner} />
      <CardList>
        {showData.map((item, index) => {
          if ((index + 1) % 6 === 0) {
            return (
              <MiddleBigCard
                data={item.data}
                key={item.data.id}
                clickModal={clickModal}
              />
            );
          }
          return (
            <ShowCard
              data={item.data}
              key={item.data.id}
              clickModal={clickModal}
            />
          );
        })}
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

const ObserverEl = styled.div``;
