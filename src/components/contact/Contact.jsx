import React from "react";
import { Fade } from "react-awesome-reveal";

import "./contact.css";

const Contact = () => {

  return (
    <Fade>
      <section className="container contact section min-h-[100vh]" id="contact">
        <h2 className="section_title">Lets Connect</h2>
        <div className="contact_container grid">
          <div className="contact_info">
            <h3 className="contact_title">Let's talk about everything!</h3>
            <p className="contact_details">
              Don't like forms? Send me an <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ikhsanadi300@gmail.com" className="underline hover:text-[#F33C36]" rel="noreferrer" target="_blank">email</a>. 👋
            </p>
          </div>

          <form method="POST" action="https://getform.io/f/8b4a998c-3766-464c-90f4-c42fe9263083" className="contact_form">
            <div className="contact_form-group">
              <div className="contact_form-div">
                <input
                  name="name"
                  type="text"
                  className="contact_form-input"
                  placeholder="Insert your name"
                />
              </div>
              <div className="contact_form-div">
                <input
                  name="email"
                  type="email"
                  className="contact_form-input"
                  placeholder="Insert your email"
                />
              </div>
            </div>
            <div className="contact_form-div">
              <input
                name="subject"
                className="contact_form-input"
                placeholder="Insert your subject"
              />
            </div>
            <div className="contact_form-div contact_form-area">
              <textarea
                name="content"
                cols="30"
                rows="30"
                className="contact_form-input"
                placeholder="Write your messages"
              ></textarea>
            </div>
            <button className="btn">Send Messages</button>
          </form>
        </div>
      </section>
    </Fade>
  );
};

export default Contact;
