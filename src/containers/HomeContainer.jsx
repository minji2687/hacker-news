import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsSagaStart } from "../redux/modules/news";
import { getShowSagaStart } from "../redux/modules/show";
import { getAskSagaStart } from "../redux/modules/ask";
import { getJobsSagaStart } from "../redux/modules/jobs";
import { getTopSagaStart } from "../redux/modules/top";
import Home from "../components/Home";

export default function HomeContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsSagaStart());
    dispatch(getShowSagaStart());
    dispatch(getAskSagaStart());
    dispatch(getJobsSagaStart());
    dispatch(getTopSagaStart());
  }, []);

  //Fatch Data
  const topData = useSelector((state) => state.top.topData);
  const newsData = useSelector((state) => state.news.newsData);
  const showData = useSelector((state) => state.show.showData);
  const askData = useSelector((state) => state.ask.askData);
  const jobsData = useSelector((state) => state.jobs.jobsData);
  //Page

  return (
    <Home
      topData={topData}
      newsData={newsData}
      showData={showData}
      askData={askData}
      jobsData={jobsData}
    />
  );
}
