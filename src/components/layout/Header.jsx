import React from "react";
import logo from "../../assets/logo.svg";
import back from "../../assets/backArrow.svg";
import menu from "../../assets/menu.svg";
import styled from "@emotion/styled";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeAboutPage } from "../../redux/modules/page";
import userPageBack from "../../assets/user/userPageBack.svg";

const HeaderWrap = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  padding: 0 18px;
  background: ${({ path }) => (path === "about" ? "#fff" : "#656565")};
  border-bottom: 2px solid #eeeeee;
  padding-top: 13px;
`;

const Logo = styled.h1`
  font-family: "Newsreader", serif;
  font-style: italic;
  font-weight: 500;
  font-size: 35.5364px;
  line-height: 138.19%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -31%);
  color: ${({ path }) => (path === "about" ? "#000" : "#fff")};
`;

const UserId = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 138.19%;
  color: #ffffff;
  letter-spacing: -0.05em;
`;
export default function Header() {
  let navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.slice(1);
  const dispatch = useDispatch();
  const userPath = path.slice(0, 4);
  const useId = location.pathname.split("/")[2];

  return (
    <HeaderWrap path={path}>
      {path === "about" ? (
        <img src={back} alt="뒤로가기" onClick={() => navigate(-1)} />
      ) : userPath === "user" ? (
        <img src={userPageBack} alt="로고" onClick={() => navigate(-1)} />
      ) : (
        <img src={logo} alt="로고" />
      )}
      <Logo path={path}>
        {path === "about" ? (
          "Hello World!"
        ) : userPath === "user" ? (
          <UserId>{useId}</UserId>
        ) : (
          "Hacker News"
        )}
      </Logo>
      {path === "about" || useId ? null : (
        <span onClick={() => dispatch(changeAboutPage())}>
          <Link to="/about">
            <img src={menu} alt="메뉴" />
          </Link>
        </span>
      )}
    </HeaderWrap>
  );
}
