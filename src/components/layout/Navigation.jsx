import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import homeNon from "../../assets/home-non.svg";
import jobsNon from "../../assets/jobs-non.svg";
import showNon from "../../assets/show-non.svg";
import askNon from "../../assets/ask-non.svg";
import newsNon from "../../assets/news-non.svg";
import homeFill from "../../assets/home-fill.svg";
import newsFill from "../../assets/news-fill.svg";
import showFill from "../../assets/show-fill.svg";
import askFill from "../../assets/ask-fill.svg";
import jobsFill from "../../assets/jobs-fill.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  changeHomePage,
  changeNewsPage,
  changeShowPage,
  changeAskPage,
  changeJobsPage,
} from "../../redux/modules/page";

const NavWrap = styled.nav`
  max-width: 414px;
  margin: 0 auto;
  width: 100%;
  background: #ffc700;
  height: 83px;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
`;

const Nav = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  width: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: url(${selectIcon}) no-repeat center;
  cursor: pointer;
  a {
    height: 100%;
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
`;

function selectIcon({ NonIcon, FillIcon, label, page }) {
  if (page === label) {
    return FillIcon;
  }
  return NonIcon;
}

export default function Navigation() {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.page.page);
  console.log("page", page);
  const [navigation, setNav] = useState([
    {
      routeName: "/",
      nonIcon: homeNon,
      fillIcon: homeFill,
      label: "HOME",
      changePage: changeHomePage,
    },
    {
      routeName: "/news",
      nonIcon: newsNon,
      fillIcon: newsFill,
      label: "NEWS",
      changePage: changeNewsPage,
    },
    {
      routeName: "/show",
      nonIcon: showNon,
      fillIcon: showFill,
      label: "SHOW",
      changePage: changeShowPage,
    },
    {
      routeName: "/ask",
      nonIcon: askNon,
      fillIcon: askFill,
      label: "ASK",
      changePage: changeAskPage,
    },
    {
      routeName: "/jobs",
      nonIcon: jobsNon,
      fillIcon: jobsFill,
      label: "JOBS",
      changePage: changeJobsPage,
    },
  ]);

  const location = useLocation();
  const path = location.pathname.slice(1);

  return (
    path !== "about" && (
      <NavWrap>
        <Nav>
          {navigation.map((item) => (
            <NavItem
              key={item.routeName}
              page={page}
              NonIcon={item.nonIcon}
              FillIcon={item.fillIcon}
              onClick={() => dispatch(item.changePage())}
              label={item.label}
            >
              <Link to={item.routeName}></Link>
            </NavItem>
          ))}
        </Nav>
      </NavWrap>
    )
  );
}
