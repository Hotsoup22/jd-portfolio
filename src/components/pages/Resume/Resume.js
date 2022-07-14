import Card from "react-bootstrap/Card";
import "../../Header";
import "./resume.css";


export default function Resume() {
  return (
    <Card className="resumeCard">
      <h3 className="resume-nameTitle">Jose E. Diaz</h3>
      <section className="resume-contactInfo ">
        <p>
         jose22gw@gmail.com
        </p>
        <p>
          206-452-9207
        </p>
        <p>
        Federal way, WA
        </p>
        <p>
          <a href="https://jd22--portfolio.herokuapp.com/#Resumea">Portfolio</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/jose-diaz-07043220b/">
            Linkedin
          </a>
        </p>
        <p>
          <a href="https://github.com/Hotsoup22">Github</a>
        </p>
      </section>

      <Card.Body className="">
        
        <p className=" resume-summary">
          A motivated software engineering graduate from the University of Washington Coding Bootcamp 
          Program with fundamental knowledge of software design, APIs, user interfaces, and debugging 
          methods. Seeking to utilize proven analytical, technical, and programming skills to thrive as a software 
          engineer.
        </p>

        <h5 className="resume-htag">TECHNICAL EXPERIENCE:</h5>
        <section className="resume-list">
          <ul className="resume-ul ">
            <h6 className="resume-skillsHtag">
              <b>API Design:</b>
            </h6>

            <li>Client-Server Model</li>
            <li>API</li>
            <li>Rest</li>
            <li>JSON</li>
            <li>AJAX (Fetch API)</li>
            <li>HTTP request methods</li>
            <li>GraphQL</li>
          </ul>

          <ul className="resume-ul ">
            <h6 className="resume-skillsHtag">
              {" "}
              <b>Browser Based Technologies:</b>
            </h6>

            <li>HTML/CSS</li>
            <li>JavaScript/jQuery</li>
            <li>Bootstrap</li>
            <li>React.js</li>
            <li>Progressive Web Applications (PWAs)</li>
            <li>Local Storage, Session Storage, IndexedDB</li>
          </ul>

          <ul className="resume-ul">
            <h6 className="resume-skillsHtag">
              <b>Deployment and Delivery:</b>
            </h6>
            <li>Heroku</li>
            <li>Git</li>
            <li>GitHub Pages</li>
            <li>Shell Scripting</li>
            <li>Continuous Integration</li>
            <li>Linting</li>
          </ul>

          <ul className="resume-ul">
            <h6 className="resume-skillsHtag">
              {" "}
              <b>Server Side Development:</b>{" "}
            </h6>
            <li>Template Engines</li>
            <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
          </ul>

          <ul className="resume-ul">
            <h6 className="resume-skillsHtag">
              {" "}
              <b>Databases:</b>{" "}
            </h6>
            <li>MySQL/NoSQL</li>
            <li>MongoDB</li>
          </ul>
        </section>
   
        <div className="card-body-col2">
          <section className="work-Exp">
            <h4 className="resume-htag">PROFESSIONAL EXPERIENCE:</h4>

            <div className="work-exp-binford">
              <h6 className="work-exp-title">
                 REPAIR MAINTENANCE, BINFORD METALS
              </h6>
              <p className="">April 2016 – MAY 2018 AND JUNE 2019-OCTOBER 2020 Kent, WA </p>
              <ul className=" resume-ul">
                <li>Heavy equipment and machinery repair and maintenance</li>
                <li>Engine installations (tear-down, rebuilds, and swaps)</li>
                <li>Diagnostics</li>
                <li>Custom fabrication for Repair</li>
              </ul>
            </div>

            <div className="work-exp-amazon">
            <h6 className="work-exp-title">
            FULLFILLMENT ASSOCIATE, AMAZON FULLFILLMENT 
              </h6>
              <p className="">SEPTEMBER 2018-MAY 2019, Kent, WA</p>
              <ul className=" resume-ul">
                <li>Inventory</li>
                <li>Quality Assurance</li>
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
              <h5 className="resume-htag">Education:</h5>

              <p className="">HIGH-SCHOOL DIPLOMA, IGRAD </p>
              <p>KENT, WA JUNE 2015</p>
             
            </div>

            <div className="educationDiv">
              <h5 className="resume-htag">Certificate: </h5>
              <p className="">FULL STACK WEB DEVELOPMENT CERTIFICATE, UNIVERSITY OF WASHINGTON</p>
              <p>SEATTLE, WA OCTOBER 2021</p>
              
            </div>
          </section>

          {/* <div className='pagebreak'></div> */}
          <section className="personalInterestSection">
            <h5 className="resume-htag">Personal Interest:</h5>
            <ul className=" resume-ul">
              <li>Video Games</li>
              <li>Horticulture</li>
              <li>Computer Science</li>
            </ul>
          </section>
        </div>
      </Card.Body>
    </Card>
  );
}
