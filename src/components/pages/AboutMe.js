import Portfolio from '../pages/Portfolio'

import Container from "react-bootstrap/Container";

import  renderPage  from "../PortfolioPage";

export default function AboutMe(){
    return (
        <Container  >
            <img className="profile-pic" src={`${process.env.PUBLIC_URL}/assets/temp-profile-pic.jpg`} alt="Jose Diaz profilepic"/>
        
            <p className='aboutMePtag'>  A Full Stack Web-Developer, with a newly found passion for software development. I'm excited to help create the products of tomorrow.</p>
        </Container>
    )
}



// const aboutMePtag = document.querySelector ('.aboutMePtag')
//  aboutMePtag.addEventListener("click", function pTagLink(){
//     renderPage('Portfolio')
//  })
//  function handleAboutmeClick(){
    // style={{color: "red"}}
//  }