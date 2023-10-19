import React, { useState } from "react";
import "./sidebar.css";

import Toggle from "./Toggle";
import MyLogo from '../../assets/my-logo-light.svg'
import MyDarkLogo from '../../assets/my-logo-dark.svg'

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [switcher, setSwitcher] = useState(true);
  
  const toggleTheme = () => {
    if (switcher) {
      setSwitcher(!switcher)
      document.documentElement.style.setProperty('--title-color', '#fafafa');
      document.documentElement.style.setProperty('--text-color', 	'#c4c4c4');
      document.documentElement.style.setProperty('--body-color', '#1c1c1c');
      document.documentElement.style.setProperty('--container-color', '#272727');
      document.documentElement.style.setProperty('--tertiary-color', '#111211');
      
    } else {
      setSwitcher(!switcher)
      document.documentElement.style.setProperty('--title-color', '#323b52');
      document.documentElement.style.setProperty('--text-color', 	'#5c657f');
      document.documentElement.style.setProperty('--body-color', '#f9f7fd');
      document.documentElement.style.setProperty('--container-color', '#fdfdfd');
      document.documentElement.style.setProperty('--tertiary-color', '#fff');
    }
  };

  return (
    <>
      <aside className={toggle ? "aside show_menu" : "aside"}>
        <a href="#home" className="nav_logo pb-4" onClick={() => setToggle(false)}>
          <img src={switcher ? MyLogo : MyDarkLogo} alt="" />
        </a>
        <nav className="nav">
          <div className="nav_menu">
            <ul className="flex flex-col gap-4 items-center ">
              <li className="nav_item">
                <a
                  href="#about"
                  className="nav_link"
                  onClick={() => setToggle(false)}
                >
                  <i className="icon-user-following"></i>
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#services"
                  className="nav_link"
                  onClick={() => setToggle(false)}
                >
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#resume"
                  className="nav_link"
                  onClick={() => setToggle(false)}
                >
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#work"
                  className="nav_link"
                  onClick={() => setToggle(false)}
                >
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#technologies"
                  className="nav_link"
                  onClick={() => setToggle(false)}
                >
                  <i className="icon-energy"></i>
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#blog"
                  className="nav_link"
                  onClick={() => setToggle(false)}
                >
                  <i className="icon-note"></i>
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#contact"
                  className="nav_link"
                  onClick={() => setToggle(false)}
                >
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav_footer">
          <Toggle toggle={switcher} handleToggleChange={toggleTheme} />
          {/* <span className="text-base text-gray-400 rotate-180 items-center [writing-mode:vertical-rl]">
            &copy; 2023.
          </span> */}
        </div>
      </aside>
      <div
        className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"}
        onClick={() => setToggle(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
