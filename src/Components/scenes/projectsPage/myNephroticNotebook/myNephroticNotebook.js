import React from "react";
import "./myNephroticNotebook.scss";

export default function myNephroticNotebook() {
  return (
    <div className="mnn-container">
      <div className="mnn-1">
        <div className="mnn-1-title">
          <h1>My Nephrotic Notebook</h1>
        </div>
        <div className="mnn-1-text">
          <p>
            I led a team of 3 engineers that built a mobile app for{" "}
            <span className="rob-light blue2">DRIVE</span> at
            <span className="rob-light blue2">
              {" "}
              Great Ormond Street Hospital
            </span>
            .
          </p>
          <p>
            The app gave children suffering from nephrotic syndrome a more
            engaging way to monitor their disease, and gave doctors and easier
            way to access this data.
          </p>
          <p>
            The app was one of three chosen to be showcased at{" "}
            <span className="blue2 rob-light">GOSH Conference 2019</span>.
          </p>
          <p>
            It was built using <span className="rob-bold">Ionic</span> and{" "}
            <span className="rob-bold">Angular</span>, and used an SQLite
            backend.
          </p>
        </div>
        <div className="mnn-1-picture">
          <img src="/Images/projects/myNepthroticNotebook/splash.png" alt="" />
        </div>
      </div>
      <div className="mnn-2">
        <div className="mnn-2-text">
          {/* <p>
            The goal of the app was to provide children suffering from <span className="rob-light blue2">
              nephrotic
              syndrome
            </span> a more engaging way to monitor their disease than the
            existing paper diaries.
          </p>
          <p>
            It allowed a user to input and record their daily protein readings,
            and would provide medical advice determined by an algorithm using
            these readings and a doctor’s prescribed treatment plan.
          </p>
          <p>
            The data collected was also easily exportable into csv which could
            be sent to their doctor via the app.
          </p> */}
          <p>
            It was also the first time I designed the UI/UX of an application
            myself, which I did using
            <span className="rob-bold"> Sketch</span>. Below are some
            screenshots that show off my primitive design skills!
          </p>
        </div>
      </div>
      <div className="mnn-3">
        <div className="mnn-3-image-container">
          <img src="/Images/projects/myNepthroticNotebook/home.png" alt="" />
        </div>
        <div className="mnn-3-image-container">
          <img
            src="/Images/projects/myNepthroticNotebook/selector.png"
            alt=""
          />
        </div>
        <div className="mnn-3-image-container">
          <img
            src="/Images/projects/myNepthroticNotebook/selected.png"
            alt=""
          />
        </div>
        <div className="mnn-3-image-container">
          <img
            src="/Images/projects/myNepthroticNotebook/daycomplete.png"
            alt=""
          />
        </div>
        <div className="mnn-3-image-container">
          <img
            src="/Images/projects/myNepthroticNotebook/treatmentplan.png"
            alt=""
          />
        </div>
        <div className="mnn-3-image-container">
          <img
            src="/Images/projects/myNepthroticNotebook/calendar.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
