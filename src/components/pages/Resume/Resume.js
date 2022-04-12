import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import './resume.css'
import profilePic from'../../../assets/temp-profilePic.jpg'
export default function Resume(){
    return(
        <Card className='resumeDiv'>
            <Card.Header className='card-Header-Resume'>
            <img src={profilePic} alt='pictures goes here' className='profilePic' ></img>
            <div className='resumeIntroDiv'>
                <h3 className='full-Stack-Web-Dev'>Full-Stack Web Developer</h3>
                <p className=' resumePIntro'> Ready to develop databases, create user interfaces, write/test/debug code. Innovative, Motivated, Equipped With A Certificate In Full Stack Web Development, From the University of Washington.  with a background in heavy machinery repair/maintaince, Forever student of computer science.  </p>
            </div>
            </Card.Header>
            <Card.Body>
                <section>
                  
                    <a>jose22gw@gmail.com</a>
                    <a> phone #</a>
                    <a>Federal way, WA</a>
                    <a>portfolio</a>
                    <a>linkedin</a>
                    <a>github/Hotsoup22</a>

                </section>

                <section>
                    <h5>Interest</h5>
                    <p></p>
                </section>
            </Card.Body>
            <Card.Body>
                <section>
                <h4>Work Experience</h4>
                <p >BinFord</p>
                <p> Amazon wharehouse</p>
                </section>

                <section>
                    <h5> courses and education</h5>
                    <p>bootcamp</p>
                    <p>highschool</p>
                </section>

                <section>
                    <h5>Technical Skills</h5>
                    <p></p>
                </section>

         
            </Card.Body>
            {/* <Card.Footer>
            
                <p></p>
            </Card.Footer> */}
        </Card>
    )

}