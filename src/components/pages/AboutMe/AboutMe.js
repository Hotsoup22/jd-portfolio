// import Portfolio from '../pages/Portfolio'
import Container from "react-bootstrap/Container";
import profilePic from "../../../assets/temp-profilePic.jpg";
import shelf from "../../../assets/shelf-life-pj2.PNG";
import { useState } from "react";
import "../AboutMe/AboutMe.css";
// import  renderPage  from "../PortfolioPage";
import Card from "react-bootstrap/Card";
// import Footer from "../../Footer";
export default function AboutMe() {
  const [choosenFact, setChoosenFact] = useState("");
  return (
    <Container>
      <section className="aboutme-section">
        <img
          src={profilePic}
          alt="pictures goes here"
          className="profilePic"
        ></img>
        <p className="aboutMePtag">
          {" "}
          From conception to production with intuitive designs.
        </p>

        {/* random facts about me */}
        <Card className="factsAboutMeCard" bg="dark" text="white">
          <Card.Header>
            <h5>Facts About Me!</h5>
          </Card.Header>
          <Card.Body>
            <textarea
              id="randomFactTextArea"
              placeholder="RANDOM Fact.."
              defaultValue={choosenFact}
            ></textarea>
          </Card.Body>
          <Card.Footer>
            <button
              className="btn,randomFactBtn"
              onClick={() => setChoosenFact(randomFact())}
            >
              Push
            </button>
          </Card.Footer>
        </Card>
      </section>
      {/* <section>
                <Card>
                    <p></p>
                </Card>
            </section> */}

      <section className="aboutme-section">
        <Card bg="dark" className="card-aboutme">
          <Card.Header className="card-aboutme-Header">
            <h4 className="honorableMention" style={whiteText}>
              Honorable Mention:
            </h4>
            <h4 style={whiteText} className="pi-Card-Title">
              RassberryPi4 IR-Sensor
            </h4>
            {/* <img href="" alt='pictures goes here'></img> */}
          </Card.Header>
          <Card.Body className="card-aboutme-Body">
            <p>
              Git-Hub Repo:
              <a href="https://github.com/Hotsoup22/ir-sensor-rassberryPi4">
                GitHub rassberryPi4 IR temp sensor.
              </a>
            </p>

            {/* <p>I had alot of fun completing the project, more importanly there was plenty of exposure to , python and linux. the project made me feel like I could create and program Wall-E or beomce the next bill gates or steve jobs. </p>  */}
            <p>
              I had alot of fun completing the project, more importanly there
              was exposure to , python, linux and also circuitry. I learned to
              use a sodder iron for this, bought a bare IR-sensor. A little
              research and A can do attitude, I had put togther My own
              contactless Ir-Temp Sensor. while not being the most diffcult
              thing, it opened my eyes to the potential in software deleopment,
              and how it can improve the quality of everday life.
            </p>
          </Card.Body>
        </Card>
      </section>

      <section className="aboutme-section"> 
        {/* <Card bg='dark' className="card-aboutme "> */}
        <p className="info">
          please checkout my Git Hub Repo. Im always working on a new projects,
          or updating/adding features to old repo's.
        </p>
        <a href="https://github.com/Hotsoup22">GitHub</a>
        <br></br>
        <a href="https://www.linkedin.com/in/jose-diaz-07043220b/">Linked-In</a>
        {/* </Card> */}
      </section>
    </Container>
  );
}

var imgStyle = {
  width: "25%",
};
var whiteText = {
  color: "white",
};

// const lightGreyText={
//     color:'lightGrey'
// }

let thechoosenFact = [];
let choosenFactIndex = [];
const randomFact = () => {
  console.log("random Fact function start");
  const randomFactsArray = [
    "Ability to work in a fast-paced and diverse team environment",
    "Used Computers Since elemntary school, on windows XP!",
    "self taught how to sodder, and MIG Weld ",
    "example 4 ",
    "example 5",
  ];
  // const randomFactsArray = {
  //     1:"Ability to work in a fast-paced and diverse team environment",
  //     2:"Used Computers Since elemntary school, on windows XP!",
  //     3: "self taught how to sodder, and MIG Weld "};
  if (choosenFactIndex.length === 0) {
    for (var i = 0; i < randomFactsArray.length; i++) choosenFactIndex.push(i);
  }

  // Generate random number within the range of
  // length of alreadyDone array
  var randomValueIndex = Math.floor(Math.random() * choosenFactIndex.length);

  // Getting unaccessed index of myArray using above
  // random number
  var indexOfItemInMyArray = choosenFactIndex[randomValueIndex];

  // remove this index from alreadyDone array because
  // we are accessing it now.
  choosenFactIndex.splice(randomValueIndex, 1);

  // Get the value
  return randomFactsArray[indexOfItemInMyArray];
};
document.querySelector(".btn", randomFact());

console.log(thechoosenFact);
