import React from "react";
import "./contact.scss";

const email = "thomastarcher@icloud.com";
const linkedin = "linkedin.com/in/tom-archer-229598a5";
const github = "github.com/tomarcher101";
const phoneNo = "+44 7508236582";

function Contact() {
  return (
    <div className="contact-outer-container" id="contact-div">
      <div className="contact-inner-container">
        <div className="contact-top">
          <h1 className="contact-header-name">Contact</h1>
          <hr className="contact-top-line" />
        </div>
        <div className="contact-mid">
          <div className="contact-mid-left">
            <a className="contact-link contact-detail-left" href={`mailto:${email}`} target="_blank">
              <img className="contact-icon" src="/Icons/at.svg" alt="" />
              <span>{email}</span>
            </a>
          </div>
          <div className="contact-mid-mid">
            <a className="contact-link contact-detail-mid" href={`https://${linkedin}`} target="_blank">
              <img className="contact-icon" src="/Icons/linkedin.svg" alt="" />
              <span>{linkedin}</span>
            </a>
          </div>
          <div className="contact-mid-right">
            <a className="contact-link contact-detail-right" href={`https://${github}`} target="_blank">
              <img
                className="contact-icon"
                src="/Icons/github-logo.svg"
                alt=""
              />
              <span>{github}</span>
            </a>
          </div>
        </div>
        <div className="contact-bottom">
            <a className="contact-link contact-detail-right" href={`tel:${phoneNo}`}>
              <img
                className="contact-icon"
                src="/Icons/smartphone.svg"
                alt=""
              />
              <span>{phoneNo}</span>
            </a>
          </div>
        <hr className="contact-top-line"/>
      </div>
    </div>
  );
}

export default Contact;
