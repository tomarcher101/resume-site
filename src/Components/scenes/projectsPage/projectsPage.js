import React, { Component } from "react";
import "./projectsPage.scss";
import MyNephroticNotebook from "./myNephroticNotebook/myNephroticNotebook";
import GoshAR from "./goshAR/goshAR"
import ResumeSite from "./resumeSite/resumeSite"

function ProjectsPage() {
  return (
    <div className="pp-outer-container">
      <div className="pp-inner-container">
        <MyNephroticNotebook />
        <hr/>
        <GoshAR />
        <hr/>
        <ResumeSite />
        <hr/>
      </div>
    </div>
  );
}

export default ProjectsPage;