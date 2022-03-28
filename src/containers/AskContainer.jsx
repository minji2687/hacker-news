import React from "react";
import Ask from "../components/Ask";
import { useSelector } from "react-redux";

export default function AskContainer() {
  const askData = useSelector((state) => state.ask.askData);
  return <Ask askData={askData} />;
}
