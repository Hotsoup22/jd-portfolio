// import React, { useEffect, useState } from 'react';
import CardHeader from 'react-bootstrap/CardHeader'
import React from 'react'
// import Card from "react-bootstrap/Card";
import '../AboutMe/AboutMe.css'
import gitHubIcon from '../../../assets/GitHub_Logo.png'
// import rassberry_pi4 from"../../../assets/rassberry_pi4.jpg"
import linkInIcon from '../../../assets/LinkedIn-Blue-14@2x.png'
export default function AboutMe () {
  return (
    <div>
      <CardHeader className="aboutme-header-Div" text="light">
        About Me
      </CardHeader>

      <div className="bg"></div>

      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>

      <div className="aboutme-intro-Div">
        <p>Hi, my name is Jose!</p>

        <p>
          I&apos;m a passionate Full Stack Web Developer who constantly seeks out
          innovative solutions to everyday problems. With a commitment to
          critical thinking and attention to detail.{' '}
        </p>
      </div>

      <footer className="buttonContainer-div">
        <a href="https://github.com/Hotsoup22">
          <img src={gitHubIcon} alt="github link" width="70" height="30" />
        </a>
        <a href="https://www.linkedin.com/in/jose-diaz-07043220b/">
          <img src={linkInIcon} alt="github link" width="70" height="26" />
        </a>
      </footer>
    </div>
  )
}
