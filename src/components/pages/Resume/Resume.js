import Card from "react-bootstrap/Card";

import "./resume.css";

export default function Resume() {
  return (
    
   
    <Card bg='dark' className="resumeDiv">
      <Card.Header className="card-Header-Resume">
       
        <div className="resume-Header-Div">
          <h3 className="full-Stack-Web-Dev">Full-Stack Web Developer</h3>
          <p className=" resume-header-Ptag-Intro">
           
            Ready to develop databases, create user interfaces, API's, and write/test/debug
            code. Innovative, Motivated, Equipped With A Certificate In Full
            Stack Web Development, From the University of Washington, And a
            background in machine repair/maintaince, Forever student of
            computer science.
          </p>
        </div>
      </Card.Header>
      <Card.Body className="card-body-resume">

      <div className=" card-body-col1">
      <section className="resume-contactInfo ">
          <h4 >Contact Info:</h4>
            <p>Email: <a>jose22gw@gmail.com</a></p>
            <p>Phone #: <a>206-452-9207</a></p>
            <p>Located In: <a>Federal way, WA</a></p>
            <p>Website: <a href="http://localhost:3000/jd-portfolio">Portfolio</a></p>
            <p>LinkedIn: <a href='https://www.linkedin.com/in/jose-diaz-07043220b/'>linkedin</a></p>
            <p>GitHub Profile: <a href='https://github.com/Hotsoup22'>github.com/Hotsoup22</a></p>
        </section>

          <section className="resume-technicalSkills">
            <h5 className="resume-htag">Technical Skills:</h5>
                      
                            <h6>Browser Based Technologies</h6>
                        <ul className="technicalSkills-list">
                            <li>HTML/CSS</li>
                            <li>JavaScript/jQuery</li>
                            <li>Bootstrap</li>
                            <li>React.js</li>
                            <li>Progressive Web Applications (PWAs)</li>
                            <li>Local Storage, Session Storage, IndexedDB</li>
                        </ul>
                        <ul className="technicalSkills-list">
                            <h6>Databases</h6>

                            <li>MySQL/NoSQL</li>
                            <li>MongoDB</li>
                        </ul>
                        <ul className="technicalSkills-list">
                            <h6>Server Side Development</h6>

                            <li>Template Engines</li>
                            <li>MongoDB</li>
                            <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                        </ul>
                        <ul className="technicalSkills-list">
                            <h6>API Design</h6>

                            <li>Client-Server Model</li>
                            <li>API</li>
                            <li>Rest</li>
                            <li>JSON</li>
                            <li>AJAX (Fetch API)</li>
                            <li>HTTP request methods</li>
                            <li>GraphQL</li>
                        </ul>
                        <ul className="technicalSkills-list">
                            <h6>Deployment and Delivery</h6>

                            <li>Heroku</li>
                            <li>Git</li>
                            <li>GitHub Pages</li>
                            <li>Shell Scripting</li>
                            <li>Continuous Integration</li>
                            <li>Linting</li>
                        </ul>
          </section>

        </div>

        <div className="card-body-col2">

          <section className="work-Exp">
            <h4 className="resume-htag">Work Experience:</h4>

            <div className="work-exp-binford">
                <h6 className="work-exp-title">BinFord Metals, WA.</h6>
                <p className='work-exp-title'><b>Role: </b>Repair / Maintaince:</p>
                <ul className=" technicalSkills-list">
                    <li>Repaired & maintained forklifts (Hyster, Nissan, Toyota).</li>
                    <li>Repaired and maintained a variety of heavy-equiment: Bull-Dozer's, Skid-steer loaders, Wheel-Loaders (Cat, Catapillar, Case, John-Deere).</li>
                    <li>Replaced, maintained, or Rebuilt fuel systems. (propane, diesal, gasoline)</li>
                    <li>Engine tear-down, Rebuilds, and Engine-Swaps.</li>
                    <li>Maintained replaced or repaired, Hydraulic systems. </li> 
                    <li>Custom fabrication for Repair or Maintaince(this included but not limited to [torching, mig-welding, plasma cutting, Drilling])</li>
                    <li>Greased heavy machinery and semi-trailer trucks.</li>
                    <li>Electric wiring: patched, updated, or replaced.</li>
                    <li>Problem-Solving/Problem-Identifying </li>
                </ul>
            </div>

            <div className="work-exp-amazon">
            <h6 className="work-exp-title">Amazon Fufillment, WA.</h6>
                <p className='work-exp-title'><b>Role: </b>Fulfillment Associate</p>
                <ul   className=" technicalSkills-list">
                    <li>Receive and put away inventory</li>
                    <li>Ensure product meets quality requirements</li>
                    <li>Operate industrial pallet driver</li>
                    <li>Adhere to strict safety, quality, and fulfillment production standards</li>
                    <li>Push utility carts up to 60 pounds</li>

                </ul>
            </div>

          </section>

          <section>
          <div className="education-exp">
            <h5 className="resume-htag" >Education and Courses:</h5>
            <h6 className="work-exp-title">HighSchool </h6>
                <p className='work-exp-title'><b>school: </b>IGrad, 2015</p>
                <ul className=" technicalSkills-list">
                  <li>school district no.415, King County</li>
                  
                </ul>
            <h6 className="work-exp-title"> Certificate </h6>
                <p className='work-exp-title'><b>school: </b>University of Washington</p>
                <ul className=" technicalSkills-list">
                  <li>Full-Stack Web Development</li>
                  <li>In collaboration with Trilogy Education Services</li>
                
                </ul>
           </div>
          </section>

          <section>
            <h5 className="resume-htag">Personal Interest:</h5>
          
                <ul className=" technicalSkills-list">
                  <li>Video Games</li>
                  <li>Gardening </li>
                  <li>Computer Science</li>
                  <li>Audible Books</li>
                  <li>Aquascaping</li>
                 
                                
                </ul>

          </section>

        </div>
 
   

      </Card.Body>
      {/* <Card.Footer>
            
                <p></p>
            </Card.Footer> */}
    </Card>
    
  );
}
