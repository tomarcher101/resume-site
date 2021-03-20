import React from "react";
import JobListing from "../../../jobListing/jobListing"

const daltonMaag = {
  companyName: "Dalton Maag",
  jobDate: "March 2020 - Present",
  jobTitle: "Full-Stack Software Engineer",
  jobDescription: "Working as a full stack developer for a typeface/design company. From web development to contributing to and maintaing open source font development tools, I do it all."
}

const plum2 = {
  companyName: "Plum",
  jobDate: "November 2019 - April 2020",
  jobTitle: "Backend Software Engineer",
  jobDescription: "Upon completing my MSc degree, I returned to Plum as a backend software engineer. I helped model and build the paid subscription services, and developed the investment component of the app."
}

const codeCamp = {
  companyName: "Code Camp",
  jobDate: "January 2019 - November 2019",
  jobTitle: "Head Teacher",
  jobDescription: "While working on my master's degree, I lead and oversaw sessions teaching children the basics of game design and programming."
}

const fireTechCamp = {
  companyName: "Fire Tech Camp",
  jobDate: "January 2019 - November 2019",
  jobTitle: "Head Teacher",
  jobDescription: "While working on my master's degree, I worked as a tutor for Fire Tech Camp teaching teenagers the basics of Python, as well as basic game design using Construct 2. I was also part of a select group that helped test and prepare online tutoring sessions with the goal of teaching children from developing countries to code and use tech."
}

const plum1 = {
  companyName: "Plum",
  jobDate: "September 2017 - Septermber 2018",
  jobTitle: "Operations / Full-Stack Developer",
  jobDescription: "Started off as an operations intern, but after automating my job transitioned into my first ever developer role! Left in September 2018 to do a Computer Science MSc at UCL."
}

function WorkExperience() {
  return (
    <div className="we-outer-container">
      <div className="we-profile-intro-container">
        <div className="we-top">
          <h1 className="we-header-name">Work Experience</h1>
          <hr/>
          <JobListing className="jl-comp" companyName={daltonMaag.companyName} jobDate={daltonMaag.jobDate} jobTitle={daltonMaag.jobTitle} jobDescription={daltonMaag.jobDescription}/>
          <JobListing className="jl-comp" companyName={plum2.companyName} jobDate={plum2.jobDate} jobTitle={plum2.jobTitle} jobDescription={plum2.jobDescription}/>
          <JobListing className="jl-comp" companyName={codeCamp.companyName} jobDate={codeCamp.jobDate} jobTitle={codeCamp.jobTitle} jobDescription={codeCamp.jobDescription}/>
          <JobListing className="jl-comp" companyName={fireTechCamp.companyName} jobDate={fireTechCamp.jobDate} jobTitle={fireTechCamp.jobTitle} jobDescription={fireTechCamp.jobDescription}/>
          <JobListing className="jl-comp" companyName={plum1.companyName} jobDate={plum1.jobDate} jobTitle={plum1.jobTitle} jobDescription={plum1.jobDescription}/>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
