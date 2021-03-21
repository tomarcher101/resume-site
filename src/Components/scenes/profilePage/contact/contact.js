import React from "react";
import "./contact.scss"

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
          <hr />
        </div>
        <div className="contact-mid">
          <div className="contact-mid-left">
            <p>{email}</p>
          </div>
          <div className="contact-mid-mid">
            <p>{linkedin}</p>
          </div>
          <div className="contact-mid-right">
            <p>{github}</p>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="contact-bottom-left"></div>
          <div className="contact-bottom-mid">
            <p>{phoneNo}</p>
          </div>
          <div className="contact-bottom-right"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
