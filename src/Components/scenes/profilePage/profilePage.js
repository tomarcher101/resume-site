import React from "react";
import ProfileIntro from "./profileIntro/profileIntro";
import Listing from "./listing/listing";
import Contact from "./contact/contact";

const jobListings = [
  {
    companyName: "Dalton Maag",
    jobDate: "March 2020 - Present",
    jobTitle: "Full-Stack Software Engineer",
    jobDescription: `I currently work as a full stack developer for a typeface/design company. I build a lot of \
      internal tools, both web and CLI applications, used by font developers during the font development process. \
      I also contribute to, and help maintain, several open source font development tools.`,
    link: "https://www.daltonmaag.com/",
  },
  {
    companyName: "Plum",
    jobDate: "November 2019 - April 2020",
    jobTitle: "Backend Software Engineer",
    jobDescription: `Upon completing my MSc degree, I returned to Plum as a backend software engineer. I helped \
      design and build the paid subscription service and investment components of the app.`,
    link: "https://withplum.com/",
  },
  {
    companyName: "Fire Tech Camp",
    jobDate: "January 2019 - November 2019",
    jobTitle: "Camp Tutor",
    jobDescription: `While working on my master's degree, I worked as a tutor for Fire Tech Camp teaching \
      teenagers the basics of Python, as well as basic game design using Construct 2. I was also \
      part of a select group that helped test and prepare online tutoring sessions with the goal \
      of teaching children from developing countries to code and use tech.`,
    link: "https://www.firetechcamp.com/",
  },
  {
    companyName: "Code Camp",
    jobDate: "January 2019 - November 2019",
    jobTitle: "Head Teacher",
    jobDescription: `At Code Camp I took the role of a Head Teacher, leading and overseeing courses where we \
    taught primary school aged children the basics of game design and programming. The sessions were taught using \
    a Scratch like interface, with the goal of having the children create their own games by the end of the course.`,
    link: "https://www.codecamp.co.uk/",
  },
  {
    companyName: "Plum",
    jobDate: "September 2017 - Septermber 2018",
    jobTitle: "Operations / Full-Stack Developer",
    jobDescription: `The first developer role I ever had, it actually started with me working as an operations intern. \
    However, after expressing an interest in programming and writing several scripts that automated the majority of \
    my intern job, I was allowed to transition into a developer role! I left Plum in September 2018 to complete a \
    computer science masters degree at UCL, however I returned to Plum in 2019 after completing my degree`,
    link: "https://withplum.com/",
  },
];

const educationListing = [
  {
    companyName: "University College London",
    jobDate: "September 2018 - September 2019",
    jobTitle: "MSc Computer Science",
    jobDescription: `After really enjoying working as developer at Plum, I realised that it was what I wanted \
      to do indefinitely. To help myself accomplish this, and gain a deeper understanding of all the theory \
      underlying all the work I was doing, I decided to complete a Computer Science conversion masters at UCL. \
      I received a high merit in my degree (0.5% off a disctinction!), and built a great relationship with \
      the DRIVE team at Great Ormond Street Hospital during my time there. I built two apps for DRIVE during the \
      year. The first being My Nephrotic Notebook, which they were so pleased with that I partnered with them \
      once again for my dissertation, for which I built an AR appplication that allowed users to build joinable \
      Augmented Reality experiences.`,
  },
  {
    companyName: "University of Manchester",
    jobDate: "September 2014 - September 2017",
    jobTitle: "BA Economics and Philosophy",
    jobDescription: `For my undergrad I studied Economics and Philosophy at the University of Manchester, \
      with a focus on macro and development economics. Already interested in computer science by the end of my degree, \
      my Philosophy dissertaion was on the possibility of Strong AI and machine consciousness.`,
  },
  // {
  //   companyName: "Tiffin School",
  //   jobDate: "2006 - 2013",
  //   jobTitle: "",
  //   jobDescription: ["A-Levels: 1 A, 2 Bs.", "GCSEs: 4 A*s, 6 As."],

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
