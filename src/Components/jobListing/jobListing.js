import React from "react";
import "./jobListing.scss"

function JobListing(props) {
  return (
    <div className="jl-outer-container">
      <div className="jl-left">
        <h1 className={props.h1Color + " jl-name-header"}>{props.companyName}</h1>
        <p className={props.sub1Color + " jl-date"}>{props.jobDate}</p>
      </div>
      <div className="jl-right">
        <h1 className={props.h2Color + " jl-name-header" }>{props.jobTitle}</h1>
        <p className={props.sub2Color}>{props.jobDescription}</p>
        <a className="jl-link" href="{props.link}">{props.link}</a>
      </div>
    </div>
  );
}

export default JobListing;
