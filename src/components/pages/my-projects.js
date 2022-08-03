import ProjectCard from '../projectCard/ProjectCard'
import CardHeader from 'react-bootstrap/CardHeader'
import React from 'react'

const applications = [
  {
    title: 'Shelf-Life',
    image: 'shelf-life-pj2.PNG',
    liveUrl: 'https://shelf-life-206.herokuapp.com/',
    repoUrl: 'https://github.com/hotsoup42/shelf-life',
    description:
      'App was develop with the intent of reducing waste and helping save money. Track food items by experation date.',
    features: [
      'Add items to a list with category. ',
      'Track expiration date of items. ',
      'Color coded, depending on expiration date. ',
      'Create personal account.'
    ],
    browserBasedTechnologies: 'HTML, CSS, JavaScript',
    databases: 'SQL: mysql2',
    serverSideDevelopment: 'NODE.js (packages): bcrypt, express, express-handlebars, express-session, connect-session-sequelize, sequelize, dotenv, luxon, nodemon',
    aPIDesign: 'HTTP request method: express',
    deploymentAndDelivery: 'Heroku, Git, Git Hub, Agile development.'
  },
  {
    title: 'Tech-Blog',
    image: 'techblog-screenshot.png',
    liveUrl: 'https://mvc-techblog-117.herokuapp.com/',
    repoUrl: 'https://github.com/Hotsoup22/Model-View-Controller-MVC-Tech-Blog',
    description:
      'To build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts ',
    features: [
      'A homepage where you can view posts from posted by anyone. ',
      "Custom dashboard with User's personal post's. ",
      'Add & Delete Post from dashboard. ',
      'Create a Account. '
    ],
    technologies: 'HTML, JavaScript, css, Sequelize,  mysql2, express, handlebars',
    browserBasedTechnologies: 'HTML, CSS, JavaScript',
    databases: 'SQL: mysql2',
    serverSideDevelopment: 'NODE.js (packages): bcrypt, express, express-handlebars, express-session, connect-session-sequelize, sequelize, dotenv, luxon, nodemon',
    aPIDesign: 'HTTP request method: express',
    deploymentAndDelivery: 'Heroku, Git, Git Hub'
  },
  {
    title: 'Password-Generator',
    image: 'scrnShot-password-gen-v2.png',
    liveUrl: 'https://password-generator0.herokuapp.com/',
    repoUrl: 'https://github.com/Hotsoup22/password-Gen-v2',
    description: 'A Easy to use Password Generator.',
    features: [
      'Simple intuative design. ',
      'Runs on react, ',
      'Custom passwords by check box choice, ',
      'Enter password length. '
    ],
    browserBasedTechnologies: 'HTML, CSS, React, JavaScript,',
    databases: 'Future dev.update.',
    serverSideDevelopment: 'NODE.js (packages): react, react-bootstrap, react-dom-react-scripts, web-vitals',
    aPIDesign: 'Future dev.update',
    deploymentAndDelivery: 'Heroku, Git, Github'
  },
  {
    title: 'Calendar',
    image: 'calendar-pj1.PNG',
    liveUrl: 'https://mohamedmesahel.github.io/Calendar/index.html',
    repoUrl: 'https://github.com/hotsoup42/Calendar',
    description:
      'Create tasks and local events, then track them on the Calendar ',
    features: [
      'Event creator, ',
      'Weather search by city name, ',
      'Display U.S Holidays. '
    ],
    browserBasedTechnologies: 'HTML, CSS, Bulma, JavaScript, jquery, Moment.js.',
    databases: ' localStorage.get/set()',
    serverSideDevelopment: 'JavaScript',
    aPIDesign: 'HTTP request method:fetch(GET), Apis used:  PredictHQ’s, Google Calendar, AccuWeather',
    deploymentAndDelivery: ' Git, github-pages'
  },
  {
    title: 'README Generator',
    image: 'readMeGen.PNG',
    liveUrl: 'https://github.com/Hotsoup22/README-Generator',
    repoUrl: 'https://github.com/hotsoup42/README-Generator',
    description:
      "Create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. Note: this app does not have a live page, as this is a command line interface program.",
    features: [
      'Complete a short questioner, ',
      'Automatically create a ReadMe.md'
    ],
    technologies: 'JavaScript, inquirer',
    browserBasedTechnologies: 'HTML, CSS, JavaScript, jquery',
    databases: 'Creates local .md file.',
    serverSideDevelopment: 'Node.js (packages): inquirer',
    aPIDesign: 'none',
    deploymentAndDelivery: ' Git, github-pages'
  },
  {
    title: 'Note Taker',
    image: 'NoteTaker.PNG',
    liveUrl: 'https://note-taker-11111.herokuapp.com/notes',
    repoUrl: 'https://github.com/hotsoup42/Note-Taker',
    description:
      'Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.',
    features: [
      'Write, ',
      'Save, ',
      'Delete Notes. '],
    browserBasedTechnologies: 'HTML, CSS, JavaScript',
    databases: 'local json file',
    serverSideDevelopment: 'Node.js (packages): express, nodemon',
    aPIDesign: 'HTTP request method: express Router.get',
    deploymentAndDelivery: ' Git, github-pages, heroku'
  }
]

export default function MyProjects () {
  return (
    <div className="projectCard portfolio">
      <CardHeader className="myProjects-header">My-Projects</CardHeader>
      {applications.map((applicationsMap, index) => (
        <ProjectCard
          key={index}
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
  )
}
