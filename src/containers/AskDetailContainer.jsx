import AskDetail from "../components/AskDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { requestItem, requestItems } from "../redux/modules/item";
import React from "react";

export default function AskDetailContainer() {
  const [askDetailData, setAskDetailData] = useState({});
  const [askCommnetsData, setAskCommentsData] = useState(null);

  let { askId } = useParams();

  useEffect(() => {
    async function fetchAskDetailData() {
      const res = await requestItem(askId);

      setAskDetailData(res.data);
      return res.data;
    }

    function fetchAskComments(data) {
      if (!data.kids) {
        return data;
      }
      const commentsArr = Promise.all(requestItems(data.kids)).then((res) =>
        res.map(({ data }) => {
          return fetchAskComments(data);
        })
      );
      data.comments = commentsArr;
      return data;
    }

    async function fetchData() {
      const data = await fetchAskDetailData();
      const commentDetailData = await fetchAskComments(data);
      commentDetailData.comments.then((res) => {
        setAskCommentsData(res);
      });
    }
    fetchData();
  }, [askId]);

  return (
    <AskDetail
      askCommnetsData={askCommnetsData}
      askDetailData={askDetailData}
    />
  );
}
