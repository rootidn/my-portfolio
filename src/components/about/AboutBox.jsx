import React from "react";
import { Fade } from "react-awesome-reveal";

const data = [
  {
    subtitle: "IPK",
    number: 3.79,
    icon: "icon-graduation",
    delay: 100,
  },
  {
    subtitle: "Num. Certificate",
    number: 21,
    icon: "icon-docs",
    delay: 300,
  },
  {
    subtitle: "Projects",
    number: 3,
    icon: "icon-people",
    delay: 500,
  },
  {
    subtitle: "Awards",
    number: 1,
    icon: "icon-badge",
    delay: 700,
  },
];
const AboutBox = () => {
  return (
    <div className="about_boxes grid">
      {data.map(({ subtitle, number, icon, delay}) => (
        <Fade delay={delay} triggerOnce={true}>
          <div className="about_box">
            <i className={`about_icon ${icon}`}></i>
            <div>
              <h3 className="about_title">{number}</h3>
              <span className="about_subtitle">{subtitle}</span>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default AboutBox;
