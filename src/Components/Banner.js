import React from "react";
import "./Styles/Banner.css";
import Logo from "../Assets/logo.jpg";
import {HiOutlineChevronDoubleDown} from "react-icons/hi"

function Banner() {
  const style = { color: "#eee", fontSize: "2em" }
  return (
    <div className="banner-container">
      <div className="banner-top">
        <img src={Logo} className="logo" />
        <div className="banner-para">
            <p>
            We are a team of Clinicians, Scientists, Designers, MedTech Innovators
            and Engineers from Germany and India joined hands with a motive to
            create and innovate, affordable healthcare solutions for the unmet
            clinical needs.
            </p>
        </div>
      </div>

      
      <div className="downarrow">
        <HiOutlineChevronDoubleDown style={style}/>
      </div>

    </div>
  );
}

export default Banner;
