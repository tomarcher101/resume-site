import React from "react";

function JobListing(props) {
  return (
    <div className="jl-outer-container">
      <div className="jl-left">
        <h1 className="jl-name-header">{props.companyName}</h1>
        <p>{props.jobDate}</p>
      </div>
      <div className="jl-right">
        <h1 className="jl-name-header">{props.jobTitle}</h1>
        <p>{props.jobDescription}</p>
      </div>
    </div>
  );
}

export default JobListing;
