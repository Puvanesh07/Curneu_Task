import React from 'react'
import "./Styles/About.css"

function Aboutus() {
  return (
    <div className='Aboutus_container'>
      <div>
        <h1 className='abt_heading'>About Us</h1>
      </div>

      <div className='about-box'>
        <h2>About Us</h2>
        <p>Curneu MedTech Innovation is a health care technology firm based at Heidelberg, Germany. We work on a motive of building an affordable and innovative healthcare solutions that address the clinical needs thereby bringing better lives for the needy.</p>
        <p>As our motto says, "Care beyond reach", the goal of Curneu is to bring the world community smaller such a way each one of the world's population receives better healthcare. Curneu focuses on delivering quality affordable healthcare technology to developing countries.</p>
        <p>A strong team of experienced clinicians, world class scientific team and medical technologists, advisory members, research, and development team on an Indo-German initiative, work alongside with global collaborators at Curneu MedTech Innovations.</p>
      </div>


      <div className='twoboxes'>
        <div className='vision_box'>
          <h1>Our Vision</h1>
          <p>We envision to address the complex clinical needs alongside to make healthcare technology reach everyone around the globe.</p>
        </div>


        <div className='mission_box'>
          <h1>Our Mission</h1>
          <p>To outfit people with affordable as well as quality health care technology products.</p>
        </div>
      </div>

    </div>
  )
}

export default Aboutus