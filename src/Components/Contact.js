import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {FaPhone} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import "./Styles/Contact.css"

function Contact() {
  const style = { color: "#4f4f4f", fontSize: "1.2em" };
  return (
    <div className="contact-container">
        <h1>Get In Touch</h1>
        <div className="contact-hero">
            <div className="contact-left">
                <h1 className="contact-heading">Contact Details</h1>
                <div>
                    <AiOutlineSearch style={style}/>
                    <p>No1, 5th Floor, C Block, Phase 2, IIT Madras Research Park, Chennai, Tamil Nadu - 600113</p>
                </div>
                <div>
                    <FaPhone style={style}/>
                    <p>Phone: +91-9715707807</p>
                </div>
                <div>
                    <GrMail style={style}/>
                    <p>Email: contact@curneu.com</p>
                </div>
            </div>
            
            <div className="contact-right">
                <input placeholder="Your Name"/>
                <input placeholder="Your Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows="7"/>
                <button>Submit</button>
                <button>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Contact