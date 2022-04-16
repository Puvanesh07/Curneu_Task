import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { SiLinkedin, SiTwitter } from "react-icons/si";
import "./Styles/Footer.css"

function Footer() {
  const style = { color: "white", fontSize: "1.5em" }

  return (
    <div className="footer-container">
      <div className="footer-socials">
        <div>
          <FaFacebookF style={style}/>
        </div>
        <div>
          <SiLinkedin style={style}/>
        </div>

        <div>
          <SiTwitter style={style}/>
        </div>
      </div>
      <div className="policy">
          <p>Cookies Policy</p>
          <p>Privacy Policy</p>
      </div>
      <div className="copyright">
          <p>Copyright © Curneu 2022</p>
      </div>
    </div>
  );
}

export default Footer;
