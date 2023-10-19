import React from "react";
import "./technologies.css";

import { Fade } from "react-awesome-reveal";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import Data from "./Data";


const Technologies = () => {
  return (
    <Fade triggerOnce={true}>
      <section className="container section min-h-[100vh]" id='technologies'>
        <h2 className="section_title">Learned Technologies</h2>
        <Swiper
          className="technologies_container"
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          {Data.map(({ title, tools}) => (
            <SwiperSlide className="tech_item">
                <h3>{title} Technologies</h3>
              <div className="tech_container grid">
                {tools.map(({tool, icon}) => (
                  <div className="mb-4">
                    {/* <i className={`fa-brands ${icon} fa-2xl p-6`}></i> */}
                    <img src={icon} alt="" className="h-[64px] w-[64px] mx-auto object-contain"/>
                    <p>{tool}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center text-sm">
          <a href="https://www.linkedin.com/in/ikhsan-adi-putra-63a2a1137/details/certifications/" target='_blank' rel='noreferrer' className="cert_links">Show Certificates</a>

        </div>
      </section>
    </Fade>
  );
};

export default Technologies;
