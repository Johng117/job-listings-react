import React from "react";

const JobCard = (props) => {
  return (
    <div className="job-container">
      <img src={props.job.logo} alt="" />
      {props.job.company}
    </div>
  );
};

export default JobCard;
