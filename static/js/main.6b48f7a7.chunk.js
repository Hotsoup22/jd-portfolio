(this["webpackJsonpjd-portfolio"]=this["webpackJsonpjd-portfolio"]||[]).push([[0],{22:function(e,t,r){},23:function(e,t,r){},26:function(e,t,r){"use strict";r.r(t);var n=r(2),i=r.n(n),c=r(13),a=r.n(c),s=(r(22),r(23),r(6)),l=r(0),o=[{id:1,name:"About Me"},{id:2,name:"Portfolio"},{id:3,name:"Contact"},{id:4,name:"Resume"}];function j(e){var t=e.currentPage,r=e.handlePageChange;return Object(l.jsx)("div",{className:"navDiv",children:Object(l.jsx)("nav",{children:o.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#"+e.name,onClick:function(){return r(e.name)},className:t===e.name?"nav-link active":"nav-link",children:e.name})},e.id)}))})})}function h(e){var t=e.currentPage,r=e.handlePageChange;return Object(l.jsx)("div",{children:Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"Jose E. Diaz"}),Object(l.jsx)(j,{currentPage:t,handlePageChange:r}),Object(l.jsx)("div",{})]})})}var d=function(){return Object(l.jsx)("div",{className:"footerDiv",children:Object(l.jsx)("p",{children:"Questions? Contact Me: email@gmail.com"})})};function u(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Resume"}),Object(l.jsx)("a",{href:"https://drive.google.com/file/d/122HYGt1mfoV6cdf2rqYJxIgJkrvwPzfq/view?",target:"_blank",rel:"noreferrer",children:"pdf download"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h5",{children:"Summary"}),Object(l.jsx)("p",{className:"ptag",children:"Focused and quick-Learing Developer"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h5",{children:"Skills"}),Object(l.jsxs)("ul",{className:"ptag",children:[Object(l.jsx)("li",{children:"HTML5"}),Object(l.jsx)("li",{children:"CSS3"}),Object(l.jsx)("li",{children:"JavaScript"}),Object(l.jsx)("li",{children:"jQuery"}),Object(l.jsx)("li",{children:"Handlebars.js"}),Object(l.jsx)("li",{children:"React.js"}),Object(l.jsx)("li",{children:"Node.js"}),Object(l.jsx)("li",{children:"Express.js"}),Object(l.jsx)("li",{children:"MySQL2"}),Object(l.jsx)("li",{children:"Sequelize"}),Object(l.jsx)("li",{children:"MongoDB"}),Object(l.jsx)("li",{children:"Mongoose.js"})]})]})]})}function m(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"About me"}),Object(l.jsx)("img",{className:"profile-pic",src:"".concat("/jd-portfolio","/assets/temp-profile-pic.jpg"),alt:"Jose Diaz profilepic"}),Object(l.jsx)("p",{className:"ptag",children:"Hi, my name is Jose E. Diaz. I am a full stack web-Developer, currently enrolled in University of Washington's code boot camp. with a background in mechanical repair. enthusiastic to start learning more whether its on the job, at home or enrolled in a course/school."})]})}r(25);function b(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),r=t[0],i=t[1],c=function(e){var t=e.target,r=t.name,n=t.value;("yourName"===r||"email"===r)&&i(n)};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Contact"}),Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("label",{htmlFor:"name-input",children:" Name: "}),Object(l.jsx)("input",{id:"name-input",name:"yourName",value:r.name,onChange:c,placeholder:"Your Name"}),Object(l.jsx)("label",{htmlFor:"email-input",children:" Email: "}),Object(l.jsx)("input",{id:"email-input",name:"Email",value:r.email,onChange:c,placeholder:" Your Email"}),Object(l.jsx)("label",{htmlFor:"message-input",children:" Message: "}),Object(l.jsx)("input",{id:"message-input",name:"message",value:r.message,onChange:c,placeholder:" Your Message"}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})]})}r(12);var p=r(7),x=r(15),g=r(16),O=r(14),f=r(17);function v(e){var t=e.title,r=e.image,n=e.liveUrl,i=e.repoUrl;e.technology;return Object(l.jsx)(O.a,{children:Object(l.jsx)(x.a,{xs:1,md:1,className:"g-4",children:Array.from({length:1}).map((function(e,c){return Object(l.jsx)(g.a,{children:Object(l.jsxs)(p.a,{children:[Object(l.jsx)(p.a.Img,{variant:"top",src:"".concat("/jd-portfolio","/assets/").concat(r),alt:"Application Image"}),Object(l.jsxs)(p.a.Body,{children:[Object(l.jsx)(p.a.Title,{children:t}),Object(l.jsx)(p.a.Text,{children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)("a",{rel:"noreferrer",href:n,target:"_blank",className:"btn btn-sm btn-outline-secondary",children:"View"}),Object(l.jsx)("a",{rel:"noreferrer",href:i,target:"_blank",className:"btn btn-sm btn-outline-secondary",children:"Repo"})]})})]})]})})}))})})}var N=[{title:"Shelf-Life",image:"shelf-life-pj2.PNG",liveUrl:"https://shelf-life-206.herokuapp.com/",repoUrl:"https://github.com/hotsoup42/shelf-life",Dependencies:["JavaScript","HTML","CSS","bcrypt","connect-session-sequelize","dotenv","express","express-handlebars","express-session","luxon","mysql2","sequelize","nodemon"]},{title:"Calendar",image:"calendar-pj1.PNG",liveUrl:"https://mohamedmesahel.github.io/Calendar/index.html",repoUrl:"https://github.com/hotsoup42/Calendar",technology:["JavaScript","HTML","CSS"]},{title:"Regex Tutorial",image:"regex-tutorial.PNG",liveUrl:"https://gist.github.com/hotsoup42/fa31063b57df2b55dcd8cf7c0e43e78e#file-matchinganemail-md",repoUrl:"https://gist.github.com/hotsoup42/fa31063b57df2b55dcd8cf7c0e43e78e",technology:["Markdown","Regular Expressions"]},{title:"Quiz Game",image:"QuizGame.PNG",liveUrl:"https://hotsoup42.github.io/04-quiz-game/",repoUrl:"https://github.com/hotsoup42/04-quiz-game",technology:["HTML","JavaScript","CSS 1.9%"]},{title:"Note Taker",image:"NoteTaker.PNG",liveUrl:"https://note-taker-11111.herokuapp.com/notes",repoUrl:"https://github.com/hotsoup42/Note-Taker",technology:["JavaScript 71.2%","HTML 19.5%","CSS 9.3%","bcrypt","connect-session-sequelize","dotenv","express","express-handlebars","express-session","luxon","mysql2","sequelize","nodemon"]},{title:"README Generator",image:"readMeGen.PNG",liveUrl:"N/A",repoUrl:"https://github.com/hotsoup42/README-Generator",technology:["JavaScript","inquirer"]}];function y(){return Object(l.jsx)("div",{className:"portfolio",children:Object(l.jsx)("div",{className:"projectCard",children:N.map((function(e){return Object(l.jsx)(v,{title:e.title,image:e.image,liveUrl:e.liveUrl,repoUrl:e.repoUrl,technology:e.technology})}))})})}function S(){var e=Object(n.useState)("Portfolio"),t=Object(s.a)(e,2),r=t[0],i=t[1];return Object(l.jsxs)("div",{className:"thisit",children:[Object(l.jsx)(h,{currentPage:r,handlePageChange:function(e){return i(e)}}),function(){switch(r){case"Portfolio":return Object(l.jsx)(y,{});case"Contact":return Object(l.jsx)(b,{});case"Resume":return Object(l.jsx)(u,{});default:return Object(l.jsx)(m,{})}}(),Object(l.jsx)(d,{})]})}var C=function(){return Object(l.jsx)(S,{})};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.6b48f7a7.chunk.js.map