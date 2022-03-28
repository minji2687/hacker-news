import Jobs from "../components/Jobs";
import { useSelector } from "react-redux";
import React from "react";

export default function JobsContainer() {
  const jobsData = useSelector((state) => state.jobs.jobsData);

  return <Jobs jobsData={jobsData} />;
}
