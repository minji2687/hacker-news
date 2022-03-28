import styled from "@emotion/styled";
import MainContentWrap from "./MainContentWrap";
import user from "../assets/user/user.svg";
import karma from "../assets/user/karma.svg";
import question from "../assets/user/question.svg";
import talk from "../assets/user/talk.svg";
import joinedAt from "../assets/user/joinedAt.svg";
import { randomUserProfileImg } from "../util";
import React from "react";

const UserWrap = styled.div`
  margin: 0 auto;
  width: 386px;
  background: #656565;
  border-radius: 13px;
  overflow: hidden;
  padding-top: 56px;
`;

const UserProfileTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff2c5;
  border-radius: 10px 10px 0px 0px;
  height: 72px;
  font-weight: bold;
  font-size: 20px;
`;

const ProfileWrap = styled.div`
  display: flex;
  min-height: 402px;
`;

const ProfilePtotoWrap = styled.div`
  width: 134px;
  background: #dadada;
  display: flex;
  justify-content: center;
  min-height: 402px;
`;

const Profile = styled.div`
  width: 90px;
  height: 90px;
  background: #ffffff;
  border-radius: 13.18px;
  margin-top: 61px;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
  background: url(${(props) => props.photo}) no-repeat;
`;

const UserDetail = styled.div`
  width: 252px;
  display: flex;
  flex-direction: column;
  background: #fff;
  min-height: 402px;
  padding: 35px 23px;
  p,
  div {
    min-height: 25px;
    font-size: 14px;
  }
`;

const UserID = styled.p`
  margin-bottom: 17px;
  padding-left: 43px;
  background: url(${user}) no-repeat;
`;

const KarmaText = styled.p`
  font-weight: 500;
  font-size: 17.6842px;
  margin-bottom: 22px;
  padding-left: 43px;
  background: url(${karma}) no-repeat;
  font-size: 17.6842px;
  span {
    color: FFC700;
  }
`;

const JoinedDate = styled.p`
  margin-bottom: 22px;
  padding-left: 43px;
  background: url(${joinedAt}) no-repeat;
`;

const Introduction = styled.p`
  line-height: 21px;
  padding-left: 43px;
  background: url(${talk}) no-repeat;
`;

export default function User({ userData }) {
  return (
    <MainContentWrap>
      <UserWrap>
        <UserProfileTitle>{`${userData.id}’s Profile`}</UserProfileTitle>
        <ProfileWrap>
          <ProfilePtotoWrap>
            <Profile photo={randomUserProfileImg()}></Profile>
          </ProfilePtotoWrap>

          <UserDetail>
            <UserID>{userData.id}</UserID>
            <JoinedDate>joined 2 years ago</JoinedDate>
            <KarmaText>{userData.karma}</KarmaText>
            <Introduction>{userData.about}</Introduction>
          </UserDetail>
        </ProfileWrap>
      </UserWrap>
    </MainContentWrap>
  );
}
