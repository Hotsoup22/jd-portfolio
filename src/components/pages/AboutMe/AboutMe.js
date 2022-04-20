// import Portfolio from '../pages/Portfolio'
import Container from "react-bootstrap/Container";
import shelf from '../../../assets/shelf-life-pj2.PNG' ;
import { useState } from "react";
import '../AboutMe/AboutMe.css'
// import  renderPage  from "../PortfolioPage";
import Card from 'react-bootstrap/Card'
// import Footer from "../../Footer";
export default function AboutMe(){
    const [choosenFact, setChoosenFact] = useState("");
    return (
        <Container  >
            <section>
                
            <img className="profile-pic" src={`${process.env.PUBLIC_URL}/assets/temp-profile-pic.jpg`} alt='pictures goes here' />
            <p className='aboutMePtag'>  A Full Stack Web-Developer, From conception to production with intuitive designs.</p>
            
            
            <br></br>
           
                    
            {/* random facts about me */}
            <Card  bg='dark' text="white">
                <Card.Header>
                    <h5>Facts About Me!</h5>
                </Card.Header>
                <Card.Body >
                    <textarea id="randomFactTextArea" placeholder="RANDOM Fact.." defaultValue={choosenFact}></textarea>

                </Card.Body>
                <Card.Footer>
                    <button  className="btn,randomFactBtn"  onClick={() => setChoosenFact(randomFact())} >Push</button>
                </Card.Footer>
            </Card>
                
            </section>

            <section>
            <h3 style={ whiteText}>My favorite project, so far:</h3>
                <Card bg='dark' text='white' className="card-aboutme">
                <h3 >Shelf-Life</h3>
                <img src={shelf} alt='pictures goes here' width="800" stlye={imgStyle}></img>
                <Card.Body>
                <a href="https://github.com/Hotsoup22/shelf-life">The Shelf-Life Repo:</a>              
                <p > shelf-life, I had a great team. learned alot not only about code, but being apart of a effective team. Using kanban cards on github, with git version control, and finally great communication we produced a execlent mininum viable product, with A so far bug free base to expand and build.  even with time deadline of 2 weeks. A so far bug free base to expand and build . </p>
                </Card.Body>
                </Card>
            </section>

            <br></br>

            <section>
                <h4 className="honorableMention"  style={ whiteText}>honorable mention:</h4>
                <Card bg='dark' className="card-aboutme">
                <h3 style={whiteText} >RassberryPi4-IR Sensor</h3>
               
                <img href="" alt='pictures goes here'></img>
                <Card.Body>

                    <a href='https://github.com/Hotsoup22/ir-sensor-rassberryPi4'>GitHub rassberryPi4 IR temp sensor.</a>
                    <br></br>
                   <p>I had alot of fun completing the project, more importanly there was plenty of exposure to , python and linux. the project made me feel like I could create and program Wall-E or beomce the next bill gates or steve jobs. </p> 
              
                </Card.Body>
                </Card>
            </section>

            <section>
                <Card bg='dark' className="card-aboutme ">
                <p className="info">please checkout my Git Hub Repo. Im always working on a new projects, or updating/adding features to old repo's.</p>
                <a href='https://github.com/Hotsoup22'>GitHub</a>
                <br></br>
                <a href='https://www.linkedin.com/in/jose-diaz-07043220b/'>Linked-In</a>
                </Card>
            </section>
        </Container>
    )
   
}

var imgStyle={
    width: '25%'
}
var whiteText = {
    color: 'white'
  }
  
// const lightGreyText={
//     color:'lightGrey'
// }

let thechoosenFact = []
let choosenFactIndex = 0
const randomFact = () => {
    console.log("random Fact function start")
    const randomFactTextArea = document.querySelector("#randomFactTextArea")
    const randomFactsArray = ["Ability to work in a fast-paced and diverse team environment", "Used Computers Since elemntary school, on windows XP!", "self taught how to sodder, and MIG Weld "]
    const random = Math.floor(Math.random() * randomFactsArray.length);

        thechoosenFact = randomFactsArray[random]
        return thechoosenFact
    
};
document.querySelector('.btn', randomFact())

console.log(thechoosenFact)