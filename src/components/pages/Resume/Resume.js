// import Card from 'react-bootstrap/Card'
import '../../Header'
import './resume.css'
import React from 'react'

export default function Resume () {
  return (
    <div className="resumeCard">
      <h3 className="resume-nameTitle">Jose E. Diaz</h3>
      <section className="resume-contactInfo ">
        <div className='contactInfoDiv'>
          <p>Federal way, WA</p>
          <p>Jose22gw@gmail.com</p>
          <p>206-452-9207</p>
        </div>

        <div className='contactInfoDiv'>
          <p>
            <a href="https://www.linkedin.com/in/jose-diaz-07043220b/">
              Linkedin: https://www.linkedin.com/in/jose-diaz00
            </a>
          </p>
          <p>
            <a href="https://github.com/Hotsoup22">GitHub: https://github.com/Hotsoup22</a>
          </p>
        </div>
      </section>

      <div>
      <p className="resume-htag"><b> SUMMARY</b></p>
        <p className=" resume-summary">
          A motivated software engineering graduate from the University of
          Washington Coding Bootcamp Program with fundamental knowledge of
          software design, APIs, user interfaces, and debugging methods. Seeking
          to utilize proven analytical, technical, and programming skills to
          thrive as a software engineer.
        </p>

        <p className="resume-htag"><b> TECHNICAL SKILLS</b></p>

        <section className='technicalSkillsDiv'>
          <p> Browser Based Technologies: HTML/CSS, JavaScript, jQuery, Bootstrap, React.js, Progressive Web Applications </p>
          <p> API Design: Client-Server Model, Rest, JSON, AJAX, GraphQL, HTTP request methods </p>
          <p> Deployment and Delivery: Heroku, Git, GitHub Pages, Shell Scripting, Continuous Integration, Linting </p>
          <p> Server-Side Development: Template Engines, Mern-Stac </p>
          <p> Databases: MySQL, NoSQL, MongoDB, Local Storage, Session Storage, Indexed DB </p>
        </section>

        <section className='projects'>
          <div>
            <p className="resume-htag"><b> PROJECTS</b></p>
            <p ><a className='app-Link' href='https://shelf-life-206.herokuapp.com'><b>Shelf Life</b></a> | <a className='app-Link' href='https://github.com/Hotsoup22/shelf-life'> <b>GitHub Repo:</b> </a> https://github.com/Hotsoup22/shelf-life | <b>Deployed Project:</b> https://shelf-life-206.herokuapp.com</p>
            <p>Shelf-Life is an app that will benefit the user saving them time and money. The user will be able
              catalogue all the food items purchased and know ahead time before that product expires. My duties in
              this collaborative project included, Back-end developer: REST API & Data model definition, express-
              session npm package for authentication, and on the Client-side: Creating A dynamic web-page using
              JavaScript.
            </p>
            <p className='projectsToolsUsed'>
              Tools Used: MySQL, Bcrypt, Express, Express-handlebars, Express-session, Connect-session-sequelize, Sequelize, Dotenv, Nodemon, LuxonHeroku, Git, GitHub
            </p>
          </div>

          <div>
            <p> <a className='app-Link' href='https://mvc-techblog-117.herokuapp.com/'><b>Tech-Blog</b></a> | <a className='app-Link' href=' https://github.com/Hotsoup22/Tech-Blog '> <b>GitHub Repo:</b> </a>  https://github.com/Hotsoup22/Tech-Blog | <b>Deployed Project:</b> https://mvc-techblog-117.herokuapp.com/</p>
            <p>Shelf-Life is an app that will benefit the user saving them time and money. The user will be able
              catalogue all the food items purchased and know ahead time before that product expires. My duties in
              this collaborative project included, Back-end developer: REST API & Data model definition, express-
              session npm package for authentication, and on the Client-side: Creating A dynamic web-page using
              JavaScript.
            </p>
            <p className='projectsToolsUsed'>
              Tools Used: MySQL, Bcrypt, Express, Express-handlebars, Express-session, Connect-session-Sequelize, Sequelize, Dotenv, Luxon, Nodemon, Heroku, Git, Git Hub
            </p>
          </div>

          <div>
            <p> <a className='app-Link' href='https://password-generator0.herokuapp.com'> <b>Password-Generator</b> </a>| <a className='app-Link' href=' https://github.com/Hotsoup22/password-Gen-v2'> <b>GitHub Repo:</b> </a> https://github.com/Hotsoup22/password-Gen-v2 | <b>Deployed Project:</b> https://password-generator0.herokuapp.com/</p>
            <p>Shelf-Life is an app that will benefit the user saving them time and money. The user will be able
              catalogue all the food items purchased and know ahead time before that product expires. My duties in
              this collaborative project included, Back-end developer: REST API & Data model definition, express-
              session npm package for authentication, and on the Client-side: Creating A dynamic web-page using
              JavaScript.
            </p>
            <p className='projectsToolsUsed'>
              Tools Used: React, React-bootstrap, React-dom, React-scripts, Web-vitals, Heroku, Git, GitHub
            </p>
          </div>
        </section>

        <div className="card-body-col2">
          <section className="work-Exp">
          <p className="resume-htag"><b> EXPERIENCE</b></p>
            <div className="work-exp-binford">
              <div className='work-expDiv'>
                <p className=''><b> REPAIR MAINTENANCE </b></p>
                <p className="">2016 - 2018, 2019 - 2020 </p>
              </div>

              <div className='work-expDiv'>
                <p><b> Binford Metals Inc </b></p>
                <p> 26311 78th Ave S, WA</p>
              </div>

              <div>
                <p>
                I worked independently or as a part of a team 4-2 members, with little to no supervision. Repairing and
                maintaining A variety of heavy equipment, where I developed critical thinking, project management, and
                communication skills. I was given increased responsibilities in a short period of time due to my ability to
                problem solve and work under pressure.
                </p>
              </div>

              <ul className=" resume-ul">
                <li>Diagnostics</li>
                <li>Custom fabrication for Repair</li>
              </ul>
            </div>

            <div className="work-exp-amazon">
              <div className='work-expDiv'>
                <p className=""><b> FULLFILLMENT ASSOCIATE </b> </p>
                <p className=""> 2018 - 2019</p>
              </div>

              <div className='work-expDiv'>
              <p><b> AMAZON FULLFILLMENT </b></p>
              <p> 21005 64th Ave S, Kent WA</p>
              </div>

              <div>
                <p>
                In my role at Amazon as a fulfillment associate, I was responsible for assuring quality standards were met
                and meeting the deadline for every order. My commitment to professional excellence reflects my work ethic.
                </p>
              </div>
              <ul className=" resume-ul">
                <li>Industrial pallet driver</li>
                <li>
                  Adhere to strict safety, quality, and fulfillment production
                  standards
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="educationDiv">
              <p className="resume-htag"> <b>EDUCATION:</b> </p>
              <b> Boot Camp Certificate:</b>
              <div className="work-expDiv">
               <p >University of Washington, Seattle </p>
                <p> October, 2021 </p>
              </div>
              <p>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3,
                JavaScript, jQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
