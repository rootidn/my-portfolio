import React from "react";
import "./sidebar.css";

const Toggle = ({ toggle, handleToggleChange }) => {
  return (
    <>
       
        <div className='switch-container' onClick={handleToggleChange}>
            <div className={`switch-btn  ${!toggle ? "disable" : ""}`}>
                {toggle ? "☀️" : "🌙"}
            </div>
        </div>       
    </>
  );
};

export default Toggle;