import ProjectCard from '../projectCard/ProjectCard'
import Container from "react-bootstrap/Container";
import CardHeader from "react-bootstrap/CardHeader";

const applications= [
{
    title:"Shelf-Life",
    image:"shelf-life-pj2.PNG",
    liveUrl:"https://shelf-life-206.herokuapp.com/",
    repoUrl:"https://github.com/hotsoup42/shelf-life",
    description:"The objective of this app is to give the user A effective way of tracking food item's experation date.",
    features:` store food items on a list with category, track expiration date of items, color coded depending on how close the expiration date is, create personal account.`,
    browserBasedTechnologies:`HTML, CSS, JavaScript`,
    databases:`SQL: mysql2`,
    serverSideDevelopment:`NODE.js (packages): bcrypt, express, express-handlebars, express-session, connect-session-sequelize, sequelize, dotenv, luxon, nodemon`,
    aPIDesign:`HTTP request method: express`,
    deploymentAndDelivery:`Heroku, Git, Git Hub, Agile development.`, 
},
{
    title:"Tech-Blog",
    image:"techblog-screenshot.png",
    liveUrl:"https://mvc-techblog-117.herokuapp.com/",
    repoUrl:"https://github.com/Hotsoup22/Model-View-Controller-MVC-Tech-Blog",
    description:"To build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts ",
    features:["Create a Account, Log-in.", " A homepage where you can view posts from posted by anyone."," Custom dashboard with User's personal post's. ", "Add & Delete Post from dashboard"],
    technologies: `HTML, JavaScript, css, Sequelize,  mysql2, express, handlebars`,
    browserBasedTechnologies:`HTML, CSS, JavaScript`,
    databases:`SQL: mysql2`,
    serverSideDevelopment:`NODE.js (packages): bcrypt, express, express-handlebars, express-session, connect-session-sequelize, sequelize, dotenv, luxon, nodemon`,
    aPIDesign:`HTTP request method: express`,
    deploymentAndDelivery:`Heroku, Git, Git Hub`,
},
{
    title:"Password-Generator",
    image:"scrnShot-password-gen-v2.png",
    liveUrl:"https://password-generator0.herokuapp.com/",
    repoUrl:"https://github.com/Hotsoup22/password-Gen-v2",
    description:"A Easy to use Password Generator",
    features:"Simple intuative design, running on react. Create passwords by checking boxes, entering password length.",
  
    browserBasedTechnologies:`HTML, CSS, React, JavaScript,`,
    databases:`Future dev.update.`,
    serverSideDevelopment:`NODE.js (packages): react, react-bootstrap, react-dom-react-scripts, web-vitals`,
    aPIDesign:`Future dev.update`,
    deploymentAndDelivery:`Heroku, Git, Github`, 
},
{
    title:"Calendar",
    image:"calendar-pj1.PNG",
    liveUrl:"https://mohamedmesahel.github.io/Calendar/index.html",
    repoUrl:"https://github.com/hotsoup42/Calendar",
    description:"Create tasks and local events, then track them on the Calendar. ",
    features:['event creator, ','Weather search by city name, ','display US Holidays.'],
     browserBasedTechnologies:`HTML, CSS, Bulma, JavaScript, jquery, Moment.js.`,
     databases:` localStorage.get/set()`,
     serverSideDevelopment:`JavaScript`,
     aPIDesign:`HTTP request method:fetch(GET), Api's used:  PredictHQ’s, Google Calendar, AccuWeather`,
     deploymentAndDelivery:` Git, github-pages`, 
},
{
    title:"README Generator",
    image:"readMeGen.PNG",
    liveUrl:"https://github.com/Hotsoup22/README-Generator",
    repoUrl:"https://github.com/hotsoup42/README-Generator",
    description:"Create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. Note: this app does not have a live page, as this is a command line interface program.",
    features:"Complete a short questioner and it will automatically create a ReadMe.md for your project.",
    technologies: `JavaScript, inquirer`,
    browserBasedTechnologies:`HTML, CSS, JavaScript, jquery`,
    databases:`Creates local .md file.`,
    serverSideDevelopment:`Node.js (packages): inquirer`,
    aPIDesign:`none`,
    deploymentAndDelivery:` Git, github-pages`, 

},
{
    title:"Note Taker",
    image:"NoteTaker.PNG",
    liveUrl:"https://note-taker-11111.herokuapp.com/notes",
    repoUrl:"https://github.com/hotsoup42/Note-Taker",
    description:"Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
    features:"Write, Save, Delete Notes.",
    technologies: ``,
    browserBasedTechnologies:`HTML, CSS, JavaScript`,
    databases:`local json file`,
    serverSideDevelopment:`Node.js (packages): express, nodemon`,
    aPIDesign:`HTTP request method: express Router.get`,
    deploymentAndDelivery:` Git, github-pages, heroku`, 
    
},
]




export default function MyProjects(){
    return (
            <div className='projectCard portfolio'  >
               <CardHeader>Projects</CardHeader>
            {applications.map( ( applicationsMap , index) => (
            <ProjectCard  key={index}
                title={applicationsMap.title}
                image={applicationsMap.image}
                liveUrl={applicationsMap.liveUrl}
                repoUrl={applicationsMap.repoUrl}
                description={applicationsMap.description}
                features={applicationsMap.features}
                browserBasedTechnologies={applicationsMap.browserBasedTechnologies}
                databases={applicationsMap.databases}
                serverSideDevelopment={applicationsMap.serverSideDevelopment}
                aPIDesign={applicationsMap.aPIDesign}
                deploymentAndDelivery={applicationsMap.deploymentAndDelivery}
            />
        ))}
        </div>
         
    );
}
