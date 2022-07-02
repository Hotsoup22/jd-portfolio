import Card from "react-bootstrap/Card";
import "../../Header";
import "./resume.css";

export default function Resume() {
  return (
    <Card className="resumeCard">
      <h3 className="resume-nameTitle">Jose E. Diaz</h3>
      <section className="resume-contactInfo ">
        <p>
          <b>Email</b>: jose22gw@gmail.com
        </p>
        <p>
          <b>Phone #: </b>206-452-9207
        </p>
        <p>
          <b>Located In:</b> Federal way, WA
        </p>
        <p>
          <a href="http://localhost:3000/jd-portfolio">Portfolio</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/jose-diaz-07043220b/">
            linkedin
          </a>
        </p>
        <p>
          <a href="https://github.com/Hotsoup22">github.com/Hotsoup22</a>
        </p>
      </section>

      <Card.Body className="">
        <h5 className="resume-htag">SUMMARY:</h5>
        <p className=" resume-summary">
          Ready to develop databases, create user interfaces, APIs, and
          write/test/debug code. Innovative, Motivated, Equipped With A
          Certificate In Full Stack Web Development, From the University of
          Washington, And a background in machine repair/maintenance, problem
          solver, forever student of computer science.
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
            <li>MongoDB</li>
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
              <h6 className="resume-skillsHtag">
                <b>BinFord Metals</b> Kent, WA.
              </h6>
              <p className="work-exp-title">Repair / maintenance:</p>
              <ul className=" resume-ul">
                <li>Repaired and maintained a variety of heavy-equipment</li>
                <li>Engine tear-down, Rebuilds, and Engine-Swaps.</li>
                <li>Maintained replaced or repaired, Hydraulic systems. </li>
                <li>Custom fabrication for Repair or Maintenance</li>
                <li>Problem-Solving/Problem-Identifying </li>
              </ul>
            </div>

            <div className="work-exp-amazon">
              <h6 className="resume-skillsHtag">
                <b>Amazon Fufillment</b>, Kent, WA.
              </h6>
              <p className="work-exp-title">Fulfillment Associate</p>
              <ul className=" resume-ul">
                <li>Receive and put away inventory</li>
                <li>Ensure product meets quality requirements</li>
                <li>Operate industrial pallet driver</li>
                <li>
                  Adhere to strict safety, quality, and fulfillment production
                  standards
                </li>
                <li>Push utility carts up to 60 pounds</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="educationDiv">
              <h5 className="resume-htag">Education:</h5>

              <p className="">IGrad Academy, Kent, WA</p>
              <ul className=" resume-ul">
                <li>Diploma, school district no.415, King County</li>
                <li>August 24, 2015</li>
              </ul>
            </div>

            <div className="educationDiv">
              <h5 className="resume-htag">Certificate: </h5>
              <p className="">University of Washington</p>
              <ul className=" resume-ul">
                <li>UW Professional & Continuing Education</li>
                <li>Full-Stack Web Development</li>
              </ul>
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
