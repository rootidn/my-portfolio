import React from "react";
import { Fade } from "react-awesome-reveal";

import Data from "./Data";
import CardResume from "./CardResume";
import "./resume.css";

const Resume = () => {
  return (
    <Fade triggerOnce={true}>
      <section className="resume container section min-h-[100vh]" id="resume">
        <h2 className="section_title">Experiences</h2>
        <div className="resume_container grid">
          <div className="timeline grid">
            {Data.map((val, id) => {
              if (val.category === "education") {
                return (
                  <Fade triggerOnce={true}>
                    <CardResume
                      key={id}
                      icon={val.icon}
                      title={val.title}
                      year={val.year}
                      desc={val.desc}
                      company={val.company}
                    />
                  </Fade>
                );
              }
              return null;
            })}
          </div>

          <div className="timeline grid">
            {Data.map((val, index) => {
              if (val.category === "experience") {
                return (
                  <Fade triggerOnce={true}>
                    <CardResume
                      key={index}
                      icon={val.icon}
                      title={val.title}
                      year={val.year}
                      desc={val.desc}
                      company={val.company}
                    />
                  </Fade>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Resume;
