import React from "react";
import styled from "@emotion/styled";
import { AskInfo, AskCreatedDate } from "./AskDetail";
import { UserID } from "./card/MiddleBigCard";
import CardAdditionalInfo from "./card/CardAdditionalInfo";
import Comment from "./Comment";
import modalClose from "../assets/modalClose.svg";

const CommentModalWrap = styled.div`
  background: #ededed;
  border-radius: 40px 40px 0px 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: scroll;
  z-index: 2;
  top: ${({ openModal }) => (openModal ? 0 : "100%")};
  transition: top 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.2s;
`;

const CommentTitle = styled.div`
  background: #ffffff;
  border-radius: 20px 20px 0px 0px;
  font-size: 24px;
  line-height: 33px;
  padding: 13px 15px;
  margin: 0 10px;
`;

const CommentInfo = styled(AskInfo)`
  height: 41px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0px;
`;

const CommentUserID = styled(UserID)`
  color: #000080;
`;

const CommentList = styled.div`
  margin: 0 10px;
`;

const ModalCloseBtn = styled.div`
  text-align: center;
  margin: 10px auto;
  img {
    padding: 10px;
    cursor: pointer;
  }
`;

export default function CommentModal({
  itemData,
  commentsData,
  closeModal,
  openModal,
}) {
  return (
    <CommentModalWrap openModal={openModal}>
      <ModalCloseBtn onClick={closeModal}>
        <img src={modalClose} alt="모달 닫기 버튼" />
      </ModalCloseBtn>
      <CommentTitle>{itemData && itemData.title}</CommentTitle>
      <CommentInfo>
        <CardAdditionalInfo modal={true} />
        <CommentUserID>{itemData && itemData.by}</CommentUserID>
        <AskCreatedDate>2 days ago</AskCreatedDate>
      </CommentInfo>
      <CommentList>
        {commentsData &&
          commentsData.map((comment) => {
            return <Comment reply={false} comment={comment} key={comment.id} />;
          })}
      </CommentList>
    </CommentModalWrap>
  );
}
