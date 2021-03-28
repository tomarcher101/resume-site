import React from "react";
import ProfileIntro from "./profileIntro/profileIntro";
import Listing from "./listing/listing";
import Contact from "./contact/contact";

const jobListings = [
  {
    companyName: "Dalton Maag",
    jobDate: "March 2020 - Present",
    jobTitle: "Full-Stack Software Engineer",
    jobDescription:
      `I currently work as a full stack developer for a typeface/design company. I build a lot of \
      internal tools, both web and CLI, used by font developers during the font development process. \
      I also contribute to and help maintain several open source font development tools.`,
    link: "https://www.daltonmaag.com/",
  },
  {
    companyName: "Plum",
    jobDate: "November 2019 - April 2020",
    jobTitle: "Backend Software Engineer",
    jobDescription:
      `Upon completing my MSc degree, I returned to Plum as a backend software engineer. I helped \
      design and build the paid subscription service, and developed the investment component of the app.`,
    link: "https://withplum.com/",
  },
  {
    companyName: "Fire Tech Camp",
    jobDate: "January 2019 - November 2019",
    jobTitle: "Camp Tutor",
    jobDescription:
      `While working on my master's degree, I worked as a tutor for Fire Tech Camp teaching \
      teenagers the basics of Python, as well as basic game design using Construct 2. I was also \
      part of a select group that helped test and prepare online tutoring sessions with the goal \
      of teaching children from developing countries to code and use tech.`,
    link: "https://www.firetechcamp.com/",
  },
  {
    companyName: "Code Camp",
    jobDate: "January 2019 - November 2019",
    jobTitle: "Head Teacher",
    jobDescription:
      `While working on my master's degree, I lead and oversaw sessions teaching primary school \
      children the basics of game design and programming.`,
    link: "https://www.codecamp.co.uk/",
  },
  {
    companyName: "Plum",
    jobDate: "September 2017 - Septermber 2018",
    jobTitle: "Operations / Full-Stack Developer",
    jobDescription:
      `I started off at Plum as an operations intern. However after expressing an interest in programming \
      and writing some scripts that automated my intern job, I was allowed to transition into my first \
      ever developer role! I left Plum in September 2018 to complete a conversion Computer Science MSc at UCL.`,
    link: "https://withplum.com/",
  },
];

const educationListing = [
  {
    companyName: "University College London",
    jobDate: "September 2018 - September 2019",
    jobTitle: "MSc Computer Science",
    jobDescription:
      `After transitioning into a developer role at Plum, I decided to make my switch to software development \
      official and do a Computer Science conversion masters at UCL. I received a high merit \
      in my degree, and built several apps for DRIVE at Great Ormond Street Hospital during my \
      time there. For my dissertation I built an app that allowed users to build Augmented Reality \
      experiances that other users could join and experiance concurrently.`,
  },
  {
    companyName: "University of Manchester",
    jobDate: "September 2014 - September 2017",
    jobTitle: "BA Economics and Philosophy",
    jobDescription: 
      `For my undergrad I studied Economics and Philosophy at Manchester, with a focus on \
      Macroeconomics and Development. Already interested in computer science by the end of my degree, \
      my Philosophy dissertaion was written about the possibility of Strong AI and machine consciousness.`
  },
  // {
  //   companyName: "Tiffin School",
  //   jobDate: "2006 - 2013",
  //   jobTitle: "",
  //   jobDescription: "A-Levels: 1 A, 2 Bs.\nGCSEs: 4 A*s, 6 As.",
  // },
];

function ProfilePage() {
  return (
    <div>
      <ProfileIntro />
      <Listing
        title="Work Experience"
        listings={jobListings}
        bg="green"
        h1Color="black"
        h2Color="black"
        sub1Color="grey-light"
        sub2Color="brown"
      />
      <Listing
        title="Education"
        listings={educationListing}
        bg="white"
        h1Color="black"
        h2Color="black"
        sub1Color="grey-light"
        sub2Color="black-light"
      />
      <Contact />
    </div>
  );
}

export default ProfilePage;
