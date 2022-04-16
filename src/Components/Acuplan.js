import React from 'react'
import "./Styles/Acuplan.css"
import Logo from "../Assets/logo.jpg"

function Acuplan() {
  return (
    <div className="acuplan-container">
        <div className="acuplan-hero">
            <img src={Logo} className="acuplan-logo"/>
            <p className="acuplanpara">Acuplan is indulged with E-Health record and Therapy Recommendation engine. It confers symptoms and patient-specific acupuncture point selection letting towards the revolution of personalized medicine. Our system assists the clinicians, therapists in enabling Patient-specific Treatment Planning to the complete clinical workflow. It helps practitioners to treat patients with scientific evidences and beneficence. The real-time navigation system is strengthened to outfit meticulous clinical effectiveness. Our standalone system is engulfed with many features to treat patients with more systematic evidence.</p>
            <button className="acuplan-button">View More {">>"}</button>
        </div>
    </div>
  )
}

export default Acuplan