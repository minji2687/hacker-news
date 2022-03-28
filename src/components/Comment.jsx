import styled from "@emotion/styled";
import profile from "../assets/profile.svg";
import commentArrow from "../assets/commentArrow.svg";
import replyArrow from "../assets/replyArrow.svg";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";

const CommentContainer = styled.div`
  display: flex;
  align-items: start;
  img {
    margin: 5px 5px 0 0;
  }
`;
const CommentWrap = styled.div`
  // margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
`;

const CommentAdditionalInfo = styled.div`
  height: 65px;
  background: #eddb9b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 45px;
    height: 45px;
    border: 0.1px solid rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    background: #fff;
    margin-right: 10px;
  }
`;

export const UserName = styled.div`
  color: rgba(0, 0, 0, 0.6);
`;

const CommentedDate = styled.span`
  font-size: 14px;
  line-height: 138.19%;
  color: #2a6b25;
  margin-right: 12px;
`;

const CommnetContents = styled.div`
  padding: 10px 12px;
  font-size: 16px;
  line-height: 138.19%;
  background: #fff;
  border-radius: 0 0 8px 8px;
  margin-bottom: 10px;
`;

export default function Comment({ comment, reply }) {
  const [replyComment, setReplyComment] = useState([]);
  useEffect(() => {
    comment.comments && comment.comments.then((res) => setReplyComment(res));
  }, []);

  return (
    <CommentContainer>
      {reply && <img src={replyArrow} alt="대댓글 표시" />}
      <CommentWrap>
        <CommentAdditionalInfo>
          <UserInfo>
            <img src={profile} alt="profile" />
            <UserName>{comment.by}</UserName>
          </UserInfo>
          <div>
            <CommentedDate>a day ago</CommentedDate>
            <img src={commentArrow} alt="댓글닫기" />
          </div>
        </CommentAdditionalInfo>
        <CommnetContents>{comment.text}</CommnetContents>
        {replyComment &&
          replyComment.map((comment) => {
            return <Comment reply={true} comment={comment} key={comment.id} />;
          })}
      </CommentWrap>
    </CommentContainer>
  );
}
