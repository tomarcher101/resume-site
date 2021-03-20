import React from "react";
import JobListing from "../../../jobListing/jobListing"

const ucl = {
  companyName: "University College London",
  jobDate: "September 2018 - September 2019",
  jobTitle: "MSc Computer Science",
  jobDescription: "After transitioning into a developer role at Plum I decided to make my fling with coding official an do a Computer Science conversion!"
}

const manchester = {
  companyName: "University of Manchester",
  jobDate: "September 2014 - September 2017",
  jobTitle: "BA Economics and Philosophy",
  jobDescription: "After transitioning into a developer role at Plum I decided to make my fling with coding official an do a Computer Science conversion!"
}

const tiffin = {
  companyName: "Tiffin School",
  jobDate: "2006 - 2013",
  jobTitle: "",
  jobDescription: "Good times."
}
function ProfileIntro() {
  return (
    <div className="edu-outer-container">
      <div className="edu-profile-intro-container">
        <div className="edu-top">
          <h1 className="edu-header-name">Education</h1>
          <hr/>
          <JobListing className="jl-comp" companyName={ucl.companyName} jobDate={ucl.jobDate} jobTitle={ucl.jobTitle} jobDescription={ucl.jobDescription}/>
          <JobListing className="jl-comp" companyName={manchester.companyName} jobDate={manchester.jobDate} jobTitle={manchester.jobTitle} jobDescription={manchester.jobDescription}/>
          <JobListing className="jl-comp" companyName={tiffin.companyName} jobDate={tiffin.jobDate} jobTitle={tiffin.jobTitle} jobDescription={tiffin.jobDescription}/>
        </div>
      </div>
    </div>
  );
}

export default ProfileIntro;
