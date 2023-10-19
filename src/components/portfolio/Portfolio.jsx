import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

import "./portfolio.css";
import Menu from "./Menu";

const menuList = ["Dashboard", "Model", "Pipeline", "Website"];

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [activeItem, setActiveItem] = useState("All")
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((currItem) => {
      return currItem.category === categoryItem;
    });
    setItems(updatedItems);
  };

  return (
    <Fade triggerOnce={true} cascade={true}>
      <section className="work container section" id="work">
        <h2 className="section_title">Recent Works</h2>

        <div className="work_filters">
          <span className={activeItem==='All' ? 'work_item active' : 'work_item'} onClick={() => {
            setActiveItem('All')
            setItems(Menu)}}>
            All
          </span>
          {menuList.map((menuItem) => (
            <span className={activeItem===menuItem ? 'work_item active' : 'work_item'} onClick={() => {
              setActiveItem(menuItem)
              filterItem(menuItem)}}>
              {menuItem}
            </span>
          ))}
        </div>

        <div className="work_container grid">
          {
          items.length ? 
          items.map((item) => {
            const { id, image, title, date, link, category } = item;
            return (
              <div className="work_card" key={id}>
                <div className="work_thumbnail">
                  <img src={image} alt="" className="work_img object-cover h-48 w-full" />
                  <div className="work_mask"></div>
                </div>
                <span className="work_category">{category}</span>
                <h3 className="work_title">{title}<h3 className="work_date">{date}</h3></h3>
                <a href={link} target='_blank' rel="noreferrer" className="work_button">
                  <i className="icon-link work_button-icon"></i>
                </a>
              </div>
            );
          }) : (<><div></div><div className="text-center"><p>~ Not Found ~</p></div></>)
          }
        </div>
      </section>
    </Fade>
  );
};

export default Portfolio;
