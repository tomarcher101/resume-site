import React from "react";
import JobListing from "../../../jobListing/jobListing";
import "./listing.scss";

function Listing(props) {
  const bg = `bg-${props.bg}`;
  const line = `line-${props.bg}`

  const listingJsx = [];
  for (let item of props.listings) {
    listingJsx.push(
      <JobListing
        className="jl-comp"
        companyName={item.companyName}
        jobDate={item.jobDate}
        jobTitle={item.jobTitle}
        jobDescription={item.jobDescription}
        h1Color={props.h1Color}
        h2Color={props.h2Color}
        sub1Color={props.sub1Color}
        sub2Color={props.sub2Color}
      />
    );
  }

  return (
    <div className={bg + " we-outer-container"}>
      <div className="we-profile-intro-container">
        <div className="we-top">
          <h1 className="we-header-name">{props.title}</h1>
          <hr className={line}/>
          {listingJsx}
        </div>
      </div>
    </div>
  );
}

export default Listing;
