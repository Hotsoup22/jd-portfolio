
import React from 'react'
import '../AboutMe/AboutMe.css'
import gitHubIcon from '../../../assets/github.svg'
import linkInIcon from '../../../assets/linkedin.svg'
import trueEmailIcon from '../../../assets/envelope-fill.svg'

export default function AboutMe() {
  return (
    <div>

      <div className="aboutme-header-Div" >
        About Me
      </div>

      <div className="bg"></div>

      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>

      <div text='light' className="aboutme-intro-Div">
        <p className="introDiv-title">Hi, my name is Jose!</p>

        <p className="introDiv-ptag">
          A web & software developer who constantly seeks out innovative solutions to everyday problems. With a commitment to critical thinking and attention to detail. Three years of demonstrated experience using critical thinking, project management, and communication skills As part of a small crew repairing and maintaining heavy equipment. Earned A Certificate in Full-stack Web Development from the University of Washington. Passionate about creating a positive influence in the lives of users.
        </p>

      </div>
      <div className="buttonContainer-div">
        <a className="contactMe-button" href="mailto:Jose22gw@gmail.com">
          <img src={trueEmailIcon} alt="Email" width="40" height="40" />
        </a>
        <a className="contactMe-button" href="https://github.com/Hotsoup22">
          <img src={gitHubIcon} alt="github link" width="40" height="40" />
        </a>
        <a className="contactMe-button" href="https://www.linkedin.com/in/jose-diaz-07043220b/">
          <img src={linkInIcon} alt="LinkedIn link" width="40" height="40" />
        </a>

      </div>
    </div>
  )
}
