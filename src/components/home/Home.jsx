import React from "react";
import "./home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";

import PhotoProfile from "../../assets/profile-1.svg";

const Home = () => {
  return (
    <Fade triggerOnce={true}>
      <section
        className="container relative min-h-[100vh] flex items-center justify-center"
        id="home"
      >
        <div className="max-w-[540px] text-center">
          <img src={PhotoProfile} alt="my_picture" className="mb-6 mx-auto" />
          <h1 className="text-4xl font-bold mb-2">Ikhsan Adi Putra</h1>
          <span className="home_education inline-flex text-xl mb-2">
            I'm &nbsp;
            <Typewriter
              onInit={(typewriter) => {
                typewriter.start();
              }}
              options={{
                strings: [
                  '<span style="color: #EE9B00; font-weight:500">Data Scientist</span>',
                  '<span style="color: #6C6CE5; font-weight:500">Data Engineer</span>',
                  '<span style="color: #FF4C60; font-weight:500">Data Analyst</span>',
                  '<span style="color: #2EBD73; font-weight:500">Web Developer</span>',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <HeaderSocials />

          <a href="#contact" className="btn">
            Contact me
          </a>
        </div>
          <ScrollDown />
        {/* <Shapes /> */}
      </section>
    </Fade>
  );
};

export default Home;
