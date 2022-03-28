import React from "react";
import { useEffect, useState } from "react";
import CommentModal from "../components/CommentModal";
import { requestItems } from "../redux/modules/item";

export default function CommentModalContainer({
  itemData,
  closeModal,
  openModal,
}) {
  const [commentsData, setCommentsData] = useState(null);

  useEffect(() => {
    function fetchComments(data) {
      if (!data.kids) {
        return data;
      }
      const commentsArr = Promise.all(requestItems(data.kids)).then((res) =>
        res.map(({ data }) => {
          return fetchComments(data);
        })
      );
      data.comments = commentsArr;
      return data;
    }

    async function fetchData() {
      await fetchComments(itemData);
      itemData.comments &&
        itemData.comments.then((res) => {
          setCommentsData(res);
        });
    }

    itemData && fetchData();
  }, [itemData]);

  function close() {
    closeModal();
    setCommentsData(null);
  }
  return (
    <CommentModal
      itemData={itemData}
      commentsData={commentsData}
      closeModal={close}
      openModal={openModal}
    />
  );
}
