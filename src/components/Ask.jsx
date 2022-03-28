import React from "react";
import Comment from "./Comment";
import MainContentWrap from "./MainContentWrap";
import MainBanner from "./MainBanner";
import Card from "./card/Card";
import askMainBanner from "../assets/askMainBanner.svg";
import { CardList } from "./CardList";
import MiddleBigCard from "./card/MiddleBigCard";

export default function Ask({ askData }) {
  return (
    <MainContentWrap>
      <MainBanner background={askMainBanner} />
      <CardList>
        {askData.map((item, index) => {
          if ((index + 1) % 6 === 0) {
            return <MiddleBigCard data={item.data} key={item.data.id} />;
          }
          return <Card data={item.data} key={item.data.id} />;
        })}
      </CardList>
    </MainContentWrap>
  );

  // <Comment />;
}
