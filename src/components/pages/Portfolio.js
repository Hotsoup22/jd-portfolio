const applications= [
{
    title:"Shelf-Life",
    image:"public\assets\shelf-life-pj2.PNG",
    liveUrl:"https://shelf-life-206.herokuapp.com/",
    repoUrl:"https://github.com/hotsoup42/shelf-life",
    Dependencies: [
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
    image:"public\assets\calendar-pj1.PNG",
    liveUrl:"https://mohamedmesahel.github.io/Calendar/index.html",
    repoUrl:"https://github.com/hotsoup42/Calendar",
    technology: [
       "JavaScript",
       "HTML",
       "CSS",],
},
{
    title:"",
    image:"",
    liveUrl:"",
    repoUrl:"",
    technology: [],

},
{
    title:"",
    image:"",
    liveUrl:"",
    repoUrl:"",
    technology: [],

},
{
    title:"",
    image:"",
    liveUrl:"",
    repoUrl:"",
    technology: [],

},
{
    title:"",
    image:"",
    liveUrl:"",
    repoUrl:"",
    technology: [],

},
]




export default function Portfolio(){
    return (
        <div>
            <h3>Portfolio</h3>

        </div>
        {applications.map( ( projectInfo ) => (
            <Project key={projectInfo.id}
                title={projectInfo.title}
                imageName={projectInfo.imageName}
                liveURL={projectInfo.liveURL}
                repoURL={projectInfo.repoURL}
            />
        ) )}
    
}