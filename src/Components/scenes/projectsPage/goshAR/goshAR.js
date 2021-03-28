import React from "react";
import "./goshAR.scss";

export default function goshAR() {
  return (
    <div class="gar-container">
      <div className="gar-1">
        <div className="gar-1-picture">
          <img src="/Images/projects/goshAR/garSplash.png" alt="" />
        </div>
        <div className="gar-1-title">
          <h1>GOSH AR</h1>
        </div>
        <div className="gar-1-text">
          <p>
            GOSH AR was an app I built for my dissertation at UCL and the second
            project I worked on for <span className="rob-light">DRIVE </span>at{" "}
            <span className="rob-light">Great Ormond Street Hospital</span>.
          </p>
          <p>
            The app consisted of two seperate applications: A cross-platform
            mobile app that could join and view AR sessions, and a web
            application that could create and customise those AR sessions.
          </p>
          <p>
            The mobile app was build using{" "}
            <span className="rob-bold">Unity</span>. While the web application
            was built with <span className="rob-bold">Flask</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
