import React from "react";
import data from "./data.json";

const Job = () => {
  return (
    <div className="all-jobs-container">
      <div className="header"></div>
      {data.map((job) => {
        return (
          <div className="job-container">
            {/* <img src={job.logo} alt="" /> */}
            {job.company}
          </div>
        );
      })}
    </div>
  );
};

export default Job;
