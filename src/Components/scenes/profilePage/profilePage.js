import React from "react";
import ProfileIntro from "./profileIntro/profileIntro";
import Listing from "./listing/listing";
import Education from "./education/eduaction";
import Contact from "./contact/contact";

const jobListings = [
  {
    companyName: "Dalton Maag",
    jobDate: "March 2020 - Present",
    jobTitle: "Full-Stack Software Engineer",
    jobDescription:
      "Working as a full stack developer for a typeface/design company. From web development to contributing to and maintaing open source font development tools, I do it all.",
  },
  {
    companyName: "Plum",
    jobDate: "November 2019 - April 2020",
    jobTitle: "Backend Software Engineer",
    jobDescription:
      "Upon completing my MSc degree, I returned to Plum as a backend software engineer. I helped model and build the paid subscription services, and developed the investment component of the app.",
  },

  {
    companyName: "Code Camp",
    jobDate: "January 2019 - November 2019",
    jobTitle: "Head Teacher",
    jobDescription:
      "While working on my master's degree, I lead and oversaw sessions teaching children the basics of game design and programming.",
  },

  {
    companyName: "Fire Tech Camp",
    jobDate: "January 2019 - November 2019",
    jobTitle: "Head Teacher",
    jobDescription:
      "While working on my master's degree, I worked as a tutor for Fire Tech Camp teaching teenagers the basics of Python, as well as basic game design using Construct 2. I was also part of a select group that helped test and prepare online tutoring sessions with the goal of teaching children from developing countries to code and use tech.",
  },

  {
    companyName: "Plum",
    jobDate: "September 2017 - Septermber 2018",
    jobTitle: "Operations / Full-Stack Developer",
    jobDescription:
      "Started off as an operations intern, but after automating my job transitioned into my first ever developer role! Left in September 2018 to do a Computer Science MSc at UCL.",
  },
];

const educationListing = [
  {
    companyName: "University College London",
    jobDate: "September 2018 - September 2019",
    jobTitle: "MSc Computer Science",
    jobDescription:
      "After transitioning into a developer role at Plum I decided to make my fling with coding official an do a Computer Science conversion!",
  },
  {
    companyName: "University of Manchester",
    jobDate: "September 2014 - September 2017",
    jobTitle: "BA Economics and Philosophy",
    jobDescription:
      "After transitioning into a developer role at Plum I decided to make my fling with coding official an do a Computer Science conversion!",
  },
  {
    companyName: "Tiffin School",
    jobDate: "2006 - 2013",
    jobTitle: "",
    jobDescription: "Good times.",
  },
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
        h2Color="grey-light"
        sub1Color="brown"
        sub2Color="black-light"
      />
      <Listing
        title="Education"
        listings={educationListing}
        bg="white"
        h1Color="black"
        h2Color="grey-light"
        sub1Color="brown"
        sub2Color="black-light"
      />
      <Contact />
    </div>
  );
}

export default ProfilePage;
