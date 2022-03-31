import ProjectCard from '../projectCard/ProjectCard'

const applications= [
{
    title:"Shelf-Life",
    image:"shelf-life-pj2.PNG",
    liveUrl:"https://shelf-life-206.herokuapp.com/",
    repoUrl:"https://github.com/hotsoup42/shelf-life",
    description:"The objective of this app is to give the user a more effective way of tracking the food items they buy.",
    features:["Storing food items on a list ", " Adding and Tracking expiration dates to food items, " , "Color coded depending on how close expiration date is"],
    technology: 
      `JavaScript, 
      HTML,
      CSS,
      bcrypt,
      connect-session-sequelize,
      dotenv,
      express,
      express-handlebars,
      express-session ,
      luxon,
      mysql2,
      sequelize,
      nodemon`
},
{
    title:"Tech-Blog",
    image:"techblog-screenshot.png",
    liveUrl:"https://mvc-techblog-117.herokuapp.com/",
    repoUrl:"https://github.com/Hotsoup22/Model-View-Controller-MVC-Tech-Blog",
    description:"To build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts ",
    features:["Create a Account", "Log-in", "homepage where you can view posts from anyone","custom dashboard with User's personal posts", "Add/Delete Post"],
    technology: `HTML, JavaScript, css, Sequelize,  mysql2, express, handlebars`

},
{
    title:"Password-Generator",
    image:"scrnShot-password-gen-v2.png",
    liveUrl:"https://password-generator0.herokuapp.com/",
    repoUrl:"https://github.com/Hotsoup22/password-Gen-v2",
    description:"A simple and easy to use Password Generator",
    features:"",
    technology: `Markdown, Regular Expressions`

},
{
    title:"Calendar",
    image:"calendar-pj1.PNG",
    liveUrl:"https://mohamedmesahel.github.io/Calendar/index.html",
    repoUrl:"https://github.com/hotsoup42/Calendar",
    description:"track tasks and local events ",
    features:['Local events and event creator','Weather','US Holidays', 'Useful resources'],
    technology:
     `JavaScript,
     HTML,
     CSS,
     jquery`
},
{
    title:"README Generator",
    image:"readMeGen.PNG",
    liveUrl:"N/A",
    repoUrl:"https://github.com/hotsoup42/README-Generator",
    description:"",
    features:"",
    technology: `JavaScript, inquirer`

},
{
    title:"Note Taker",
    image:"NoteTaker.PNG",
    liveUrl:"https://note-taker-11111.herokuapp.com/notes",
    repoUrl:"https://github.com/hotsoup42/Note-Taker",
    description:"",
    features:"",
    technology: `
        JavaScript 71.2%,
        HTML 19.5%,
        CSS 9.3%,
        bcrypt,
        connect-session-sequelize,
        dotenv,
        "express", 
        express-handlebars,
        express-session,
        mysql2,
        sequelize,
        nodemon
    `
},
]




export default function MyProjects(){
    return (
            <div className='projectCard portfolio' >
            {applications.map( ( aplicationsMap , index) => (
            <ProjectCard  key={index}
                title={aplicationsMap.title}
                image={aplicationsMap.image}
                liveUrl={aplicationsMap.liveUrl}
                repoUrl={aplicationsMap.repoUrl}
                description={aplicationsMap.description}
                features={aplicationsMap.features}
                technology={aplicationsMap.technology}
            />
        ))}
        </div>
         
    );
}