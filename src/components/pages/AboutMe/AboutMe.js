import CardHeader from "react-bootstrap/CardHeader";
import Button from "react-bootstrap/Button"
import "../AboutMe/AboutMe.css";
import gitHubIcon from"../../../assets/GitHub_Logo.png"
import linkInIcon from "../../../assets/LinkedIn-Blue-14@2x.png"
export default function AboutMe() {
  // const [choosenFact, setChoosenFact] = useState("");
  return (
    <div>
      <CardHeader className='aboutme-header-Div' text='light'>About Me</CardHeader>

      <div className="bg"></div>

      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>

      <div className="aboutme-intro-Div">
        <p>Hi, Im Jose!</p>
        <br></br>
        <p>
          A passionate Full Stack Web Developer who constantly seeks out
          innovative solutions to everyday problems. With a commitment to
          critical thinking and attention to detail.{" "}
        </p>
      </div>

      <footer className="buttonContainer-div">
      
      
       <a href="https://github.com/Hotsoup22"><img src={gitHubIcon} alt="github link" width="60" height="30"/></a>
      
      
        
          <a href="https://www.linkedin.com/in/jose-diaz-07043220b/"><img src={linkInIcon} alt="github link" width="70" height="20"/></a>
  
      </footer>

    </div>
  );
}

// const lightGreyText={
//     color:'lightGrey'
// }

// <Card bg="dark" text="light" className="card-aboutme">
// <Card.Header  className="card-aboutme-Header">

//   <h4 className="pi-Card-Title">RassberryPi4 IR-Sensor</h4>
//   {/* <img href="" alt='pictures goes here'></img> */}
// </Card.Header>
// <Card.Body className="card-aboutme-Body">
//     <a href="https://github.com/Hotsoup22/ir-sensor-rassberryPi4">
//       GitHub rassberryPi4 IR temp sensor.
//     </a>
//   {/* <p>I had alot of fun completing the project, more importanly there was plenty of exposure to , python and linux. the project made me feel like I could create and program Wall-E or beomce the next bill gates or steve jobs. </p>  */}
//   <p>
//     I had alot of fun completing the project, more importanly there was
//     exposure to , python, linux and also circuitry. I learned to use a
//     sodder iron for this, bought a bare IR-sensor. A little research and
//     A can do attitude, I had put togther My own contactless Ir-Temp
//     Sensor. while not being the most diffcult thing, it opened my eyes
//     to the potential in software deleopment, and how it can improve the
//     quality of everday life.
//   </p>
// </Card.Body>
// </Card>
