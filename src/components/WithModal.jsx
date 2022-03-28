import CommentModalContainer from "../containers/CommentModalContainer";
import { useState } from "react";
import React from "react";

export default function WithModal(Component) {
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
      <Component clickModal={clickModal} closeModal={closeModal} />
      <CommentModalContainer
        itemData={modalData}
        openModal={openModal}
        closeModal={closeModal}
      />
    </>
  );
}
