import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

import "./services.css";
import serv1 from "../../assets/service-1.svg";
import serv2 from "../../assets/service-2.svg";
import serv3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: serv1,
    title: "Data Scientist",
    description:
      "Proficient using machine learning and deep learning using python with library like scikit learn, tensorflow, and pytorch",
  },
  {
    id: 2,
    image: serv2,
    title: "Data Analyst",
    description:
      "Have experience preprocessing data from scracth using python and speadsheet and creating dashboard using PowerBI and Tableau",
  },
  {
    id: 3,
    image: serv3,
    title: "Data Engineer",
    description:
      "Have experience operating Apache Airflow and DBT, Now im on progress learning for creating data pipeline on AWS and GCP.",
  },
];
const Services = () => {
  return (
    <Fade triggerOnce={true}>
      <section
        className="services container section min-h-[100vh]"
        id="services"
      >
        <h2 className="section_title">Services</h2>
        <div className="services_container grid py-5">
          {data.map(({ id, image, title, description }) => {
            return (
              <Zoom triggerOnce={true} className="services_card" key={id}>
                <div>
                  <img src={image} alt="" className="services_img" />
                  <h3 className="services_title">{title}</h3>
                  <p className="services_description">{description}</p>
                </div>
              </Zoom>
            );
          })}
        </div>
      </section>
    </Fade>
  );
};

export default Services;
