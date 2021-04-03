import React from "react";
import "./profileIntro.scss";

function ProfileIntro() {
  return (
    <div className="pi-outer-container" id="top">
      <div className="pi-profile-intro-container">
        <div className="pi-top">
          <h1 className="pi-header-name">Tom Archer</h1>
          <hr />
          <h3>Software Developer</h3>
        </div>
        <div className="pi-bottom">
          <div className="pi-left">
            <div className="pi-section-title">
              <h3 className="rob-reg">Hi. I'm Tom!</h3>
            </div>
            <div>
              <p>
                I’m a software developer with a love for all things development!
              </p>
              <p>
                While my main passion is web and app development, I dabble in
                pretty much everything. I like to keep full-stack, getting the
                best of both worlds!
              </p>
              <p>I also sometimes do stuff away from the computer!</p>
            </div>
          </div>
          <div className="pi-middle">
            <img
              className="pi-profile-image"
              src="/Images/tomprofilesquare.png"
              alt="Me"
            />
          </div>
          <div className="pi-right">
            <div className="pi-section-title">
              <h3 style={{ color: "#2CBFBB" }} className="rob-reg">About Me</h3>
            </div>
            <div className="pi-details">
              <p>
                <span>
                  <b className="grey-light">Name:</b>
                </span>
                <br />
                <span>Tom Archer</span>
              </p>
              <p>
                <span>
                  <b className="grey-light">Age:</b>
                </span>
                <br />
                <span>25</span>
              </p>
              <p>
                <span>
                  <b className="grey-light">Location:</b>
                </span>
                <br />
                <span>London</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileIntro;
