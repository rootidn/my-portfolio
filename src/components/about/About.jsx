import React from "react";
import "./about.css";
import AboutBox from "./AboutBox";
import { Fade } from "react-awesome-reveal";

import PhotoProfile from "../../assets/profile-2.svg";

const About = () => {
  return (
    <Fade triggerOnce={true}>
      <section className="about container section min-h-[100vh]" id="about">
        <h2 className="section_title">About Me</h2>

        <div className="about_container grid">
          <img src={PhotoProfile} alt="my avatar" className="about_img" />
          <Fade duration={2000} triggerOnce={true}>
            <div className="about_data grid">
              <div className="about_info">
                <p className="about_description">
                  Im focused on data career path.
                  Have experiences in data analysis and preprocessing using
                  python; building dashboard using Power BI; create and deploy
                  machine learning model on mobile or web applications.
                </p>
                <a href="drive.google.com" className="btn">
                  Download CV
                </a>
              </div>
              <div className="about_bio grid">
                
                <div className="bio_data">
                  <div className="bio_title">
                    <h3 className="bio_name">Location</h3>
                    <span className="bio_value">South Tangerang City</span>
                  </div>
                </div>

                <div className="bio_data">
                  <div className="bio_title">
                    <h3 className="bio_name">Last Studies</h3>
                    <span className="bio_value">UIN Syarif Hidayatullah Jakarta (Bachelor)</span>
                  </div>
                </div>

                <div className="bio_data">
                  <div className="bio_title">
                    <h3 className="bio_name">Age</h3>
                    <span className="bio_value">22 (2001)</span>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <AboutBox />
      </section>
    </Fade>
  );
};

export default About;
