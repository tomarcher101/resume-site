import React from "react";
import "./contact.scss";

const email = "thomastarcher@icloud.com";
const linkedin = "linkedin.com/in/tom-archer-229598a5";
const github = "github.com/tomarcher101";
const phoneNo = "+44 7508236582";

function Contact() {
  return (
    <div className="contact-outer-container">
      <div className="contact-inner-container">
        <div className="contact-top">
          <h1 className="contact-header-name">Contact</h1>
          <hr className="contact-top-line" />
        </div>
        <div className="contact-mid">
          <div className="contact-mid-left">
            <span className="contact-detail-left">
              <img className="contact-icon" src="/Icons/at.svg" alt="" />
              <span>{email}</span>
            </span>
          </div>
          <div className="contact-mid-mid">
            <span className="contact-detail-mid">
              <img className="contact-icon" src="/Icons/linkedin.svg" alt="" />
              <span>{linkedin}</span>
            </span>
          </div>
          <div className="contact-mid-right">
            <span className="contact-detail-right">
              <img
                className="contact-icon"
                src="/Icons/github-logo.svg"
                alt=""
              />
              <span>{github}</span>
            </span>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="contact-bottom-left"></div>
          <div className="contact-bottom-mid">
            <span className="contact-detail-right">
              <img
                className="contact-icon"
                src="/Icons/smartphone.svg"
                alt=""
              />
              <span>{phoneNo}</span>
            </span>
          </div>
          <div className="contact-bottom-right"></div>
        </div>
        <hr className="contact-top-line"/>
      </div>
    </div>
  );
}

export default Contact;
