import React from "react";
import data from "./data.json";
import JobCard from "./JobCard";

const Jobs = () => {
  return (
    <div className="header-jobs-content">
      <div className="header">
        <img src="./images/bg-header-desktop.svg" alt="" />
      </div>
      <div className="all-jobs-container">
        {data.map((job) => {
          return <JobCard job={job} />;
        })}
      </div>
    </div>
  );
};

export default Jobs;
