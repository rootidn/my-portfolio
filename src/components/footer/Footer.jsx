import React from "react";

const Footer = () => {
  return (
    <section className="container section footer flex flex-col items-center justify-center text-gray-400">
      <span className="text-sm gap-8 flex mb-2">
        <a href="https://www.oracle.com/id/cloud/" className="hover:text-red-500 text-center">Hosted on Oracle Cloud</a>|
        <a href="https://icons8.com" className="hover:text-red-500 text-center">Icons from Icons8</a>|
        <a href="https://fonts.google.com" className="hover:text-red-500 text-center">Font from Google Font</a>
      </span>
      <span className="text-sm">
        &copy; 2023. Ikhsan Adi Putra
      </span>
    </section>
  );
};

export default Footer;
