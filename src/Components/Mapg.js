import React from 'react'
import Iframe from './Iframe'
import "./Styles/Mapg.css"

function Mapg() {
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0545065514243!2d77.01458271394863!3d11.03453749214668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8578e2906437d%3A0x8601e13a1a1ffd5d!2sCurneu%20MedTech%20Innovations%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1650055950511!5m2!1sen!2sin" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  return (
    <div className="map">
        <Iframe iframe={iframe} className="mapg"/>
    </div>
  )
}

export default Mapg

