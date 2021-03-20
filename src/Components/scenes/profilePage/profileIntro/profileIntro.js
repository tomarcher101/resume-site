import React from "react";

function ProfileIntro() {
  return (
    <div class="pi-outer-container">
      <div class="pi-profile-intro-container">
        <div className="pi-top">
          <h1 className="pi-header-name">Tom Archer</h1>
          <hr />
          <h3>Software Developer</h3>
        </div>
        <div className="pi-bottom">
          <div className="pi-left">
            <div className="pi-section-title">
              <h3>Hi. I'm Tom!</h3>
            </div>
            <div>
              <p>
                I’m a full-stack software engineer with a love for all things
                development!
              </p>
              <p>
                While my main passion is web and app development, I dabble in pretty
                much everything.
              </p>
              <p>
                I also sometimes do stuff without a keyboard (sometimes). Game of
                footy or a mix anyone?
              </p>
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
              <h3 style={{color: "#2CBFBB"}}>About Me</h3>
            </div>
            <div className="pi-details">
              <span><b>Name:</b></span>
              <br/>
              <span>Tom Archer</span>
              <br/><br/>
              <span><b>Age:</b></span>
              <br/>
              <span>25</span>
              <br/><br/>
              <span><b>Location:</b></span>
              <br/>
              <span>London, UK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileIntro;
