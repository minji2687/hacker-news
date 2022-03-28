import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Navigation />
    </>
  );
}

export default Layout;
