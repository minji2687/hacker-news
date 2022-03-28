import styled from "@emotion/styled";
import pointIcon from "../../assets/point.svg";
import commentIcon from "../../assets/comment.svg";
import whiteCommentIcon from "../../assets/whiteCommentIcon.svg";
import React from "react";

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  color: rgba(0, 0, 0, 0.6);
`;

export const PointNum = styled.div`
  display: flex;
  align-items: center;
  margin-right: 7px;
  padding-left: 35px;
  background: url(${pointIcon}) no-repeat left;
  min-height: 24px;
  span {
    padding-bottom: 2px;
    color: ${({ modal }) => (modal ? "#fff" : "#000")};
  }
`;

export const CommentNum = styled.div`
  display: flex;
  align-items: center;
  background: url(${({ modal }) => (modal ? whiteCommentIcon : commentIcon)})
    no-repeat left;
  min-height: 24px;
  padding-left: 31px;
  span {
    padding-bottom: 2px;
    color: ${({ modal }) => (modal ? "#fff" : "#000")};
  }
`;

export default function CardAdditionalInfo({
  data,
  scoreNum,
  commentNum,
  modal,
  clickModal,
}) {
  return (
    <AdditionalInfo>
      <PointNum modal={modal}>
        <span>{scoreNum}</span>
      </PointNum>
      <CommentNum modal={modal} onClick={() => clickModal(data)}>
        <span>{commentNum}</span>
      </CommentNum>
    </AdditionalInfo>
  );
}
