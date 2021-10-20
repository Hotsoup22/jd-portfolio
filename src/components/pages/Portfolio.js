import ProjectCard from '../ProjectCard'

const applications= [
{
    title:"Shelf-Life",
    image:"shelf-life-pj2.PNG",
    liveUrl:"https://shelf-life-206.herokuapp.com/",
    repoUrl:"https://github.com/hotsoup42/shelf-life",
    Dependencies: [
      "JavaScript",
      "HTML",
      "CSS",
      "bcrypt",
      "connect-session-sequelize",
      "dotenv",
      "express",
      "express-handlebars",
      "express-session" ,
      "luxon",
      "mysql2" ,
      "sequelize",
      "nodemon"],
},
{
    title:"Calendar",
    image:"calendar-pj1.PNG",
    liveUrl:"https://mohamedmesahel.github.io/Calendar/index.html",
    repoUrl:"https://github.com/hotsoup42/Calendar",
    technology: [
       "JavaScript",
       "HTML",
       "CSS",],
},
{
    title:"Regex Tutorial",
    image:"regex-tutorial.PNG",
    liveUrl:"https://gist.github.com/hotsoup42/fa31063b57df2b55dcd8cf7c0e43e78e#file-matchinganemail-md",
    repoUrl:"https://gist.github.com/hotsoup42/fa31063b57df2b55dcd8cf7c0e43e78e",
    technology: ["Markdown","Regular Expressions"],

},
{
    title:"Quiz Game",
    image:"QuizGame.PNG",
    liveUrl:"https://hotsoup42.github.io/04-quiz-game/",
    repoUrl:"https://github.com/hotsoup42/04-quiz-game",
    technology: ["HTML", "JavaScript","CSS 1.9%"],

},
{
    title:"Note Taker",
    image:"NoteTaker.PNG",
    liveUrl:"https://note-taker-11111.herokuapp.com/notes",
    repoUrl:"https://github.com/hotsoup42/Note-Taker",
    technology: [
        "JavaScript 71.2%",
        "HTML 19.5%",
        "CSS 9.3%",
        "bcrypt",
        "connect-session-sequelize",
        "dotenv",
        "express", 
        "express-handlebars",
        "express-session",
        "luxon",
        "mysql2",
        "sequelize",
        "nodemon"
    ]
},
{
    title:"README Generator",
    image:"readMeGen.PNG",
    liveUrl:"N/A",
    repoUrl:"https://github.com/hotsoup42/README-Generator",
    technology: ["JavaScript", "inquirer"],

},
]




export default function Portfolio(){
    return (
       
        <div className='portfolio'>
      
            <div className='projectCard'>
            {applications.map( ( projectInfo ) => (
            <ProjectCard 
                title={projectInfo.title}
                image={projectInfo.image}
                liveUrl={projectInfo.liveUrl}
                repoUrl={projectInfo.repoUrl}
                technology={projectInfo.technology}
            />
        ) )}
        </div>
        </div>    
    );
}