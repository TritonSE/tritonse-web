(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7cUk":function(e,a,t){},F0Ta:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n);t("7cUk"),t("vXu+"),t("gma1");a.a=function(e){var a=e.title,t=e.subtitle,n=e.textColor,s=e.lineColor,i=e.caption;return l.a.createElement("div",{className:"center tse-divider"},l.a.createElement("p",{className:""+n},t),l.a.createElement("h3",{className:""+n},a),l.a.createElement("hr",{className:"tse-divider-line "+(s||"tse-divider-line-amber")}),l.a.createElement("p",{className:"tse-divider-caption "+n},i))}},tADz:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return h}));t("pJf4");var n=t("q1tI"),l=t.n(n),s=t("Wbzz"),i=t("9eSz"),r=t.n(i),o=t("vrFN"),c=t("RMg3"),m=t("F0Ta"),d=t("W/9C");t("B4qf"),t("vXu+"),t("gma1");function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={name:"",email:"",role:"",resume:"",graduation:"",about:"",why:""},t.handleInputChange=t.handleInputChange.bind(u(t)),t.handleDirectInputChange=t.handleDirectInputChange.bind(u(t)),t.validateForm=t.validateForm.bind(u(t)),t.resetForm=t.resetForm.bind(u(t)),t.handleSubmit=t.handleSubmit.bind(u(t)),t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var i=n.prototype;return i.validateForm=function(e){var a={valid:!1,error:"Please fill out all fields in the application."};return""===this.state.name||""===this.state.email||""===this.state.role||""===this.state.resume||""===this.state.graduation||""===this.state.about||""===this.state.why||(a.valid=!0),a},i.resetForm=function(e){this.setState({name:"",email:"",role:"",resume:"",graduation:"",about:"",why:""})},i.handleInputChange=function(e){this.handleDirectInputChange(e.target.name,e.target.value)},i.handleDirectInputChange=function(e,a){var t;this.setState(((t={})[e]=a,t))},i.handleSubmit=function(e){var a=this;e.preventDefault();var t=this.validateForm(e);t.valid?(document.getElementById("app-submit").disabled=!0,window.M.toast({html:"Please wait up to a few seconds for the submission to go through.",classes:"gray darken-1"}),fetch("https://tse-recruitment-backend.herokuapp.com/applications",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.state.name,email:this.state.email,role:this.state.role,resume:this.state.resume,graduation:this.state.graduation,about:this.state.about,why:this.state.why})}).then((function(e){if(429===e.status)return window.M.toast({html:"You are attempting to submit too many applications.",classes:"red darken-2"}),void(document.getElementById("app-submit").disabled=!1);e.json().then((function(t){200===e.status?(window.M.toast({html:"Submitted! Expect to hear back within a few weeks.",classes:"green darken-1"}),document.getElementById("app-submit").disabled=!1,a.resetForm()):window.M.toast({html:"Could not submit application: "+t.message,classes:"red darken-2"}),document.getElementById("app-submit").disabled=!1})).catch((function(e){window.M.toast({html:"An error occurred: "+e.message,classes:"red darken-2"}),document.getElementById("app-submit").disabled=!1}))})).catch((function(e){window.M.toast({html:"An error occurred: "+e.message,classes:"red darken-2"}),document.getElementById("app-submit").disabled=!1}))):window.M.toast({html:t.error,classes:"red darken-2"})},i.render=function(){var e=this,a=this.props.data,t=!1;return a.allTseApplications.edges.forEach((function(e){var a=e.node;"all"===a.id&&(t=a.active)})),l.a.createElement("div",null,l.a.createElement(o.a,{title:"Students"}),l.a.createElement(c.a,null),l.a.createElement("div",{className:"tse-apply-container"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row navy-text"},l.a.createElement("div",{className:"col l6 s12 center"},l.a.createElement(r.a,{fluid:a.students.childImageSharp.fluid,className:"tse-apply-image"}),l.a.createElement("h2",null,"For Students")),l.a.createElement("div",{className:"col l6 s12",id:"apply"},l.a.createElement("h5",{className:"tse-apply-subtitle"},"Come join our family and find a way to put your skills to use by giving back to the community! We recruit annually in the fall so make sure you stay up to date."),l.a.createElement("div",null,t?l.a.createElement("p",{className:"tse-text-medium"},"Applications are open! Apply below. We will reach out to you with more details if you are selected."):l.a.createElement("p",{className:"tse-text-medium tse-separation-small"},"Applications are currently closed. Please check back Week 0 of Fall Quarter 2020 if you are interested in joining."))))),t?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("hr",null),l.a.createElement("div",{className:"tse-separation-medium col s12"},l.a.createElement("div",{className:"card navy"},l.a.createElement("div",{className:"card-content white-text container"},l.a.createElement("h4",{className:"center"},"TSE Student Application"),l.a.createElement("p",{className:"center"},"Please whitelist the email address ",l.a.createElement("b",null,"tse.recruitment.ucsd@gmail.com")," to prevent any recruitment-related emails from going to spam!"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("span",{className:"white-text"},l.a.createElement("b",null,"Name")),l.a.createElement("input",{type:"text",name:"name",className:"validate white-text",value:this.state.name,onChange:this.handleInputChange})),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("span",{className:"white-text"},l.a.createElement("b",null,"Email")),l.a.createElement("input",{type:"email",name:"email",className:"validate white-text",value:this.state.email,onChange:this.handleInputChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("span",{className:"white-text"},l.a.createElement("b",null,"Position")),l.a.createElement("div",{value:this.state.role,onChange:this.handleInputChange},l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{className:"with-gap",name:"role",type:"radio",value:"DEVELOPER"}),l.a.createElement("span",null,"Developer"))),l.a.createElement("p",null,"           ",l.a.createElement("span",{className:"tse-text-small"},"Contribute code to meaningful projects while expanding your engineering skillset.")),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{className:"with-gap",name:"role",type:"radio",value:"DESIGNER"}),l.a.createElement("span",null,"Designer"))),l.a.createElement("p",null,"           ",l.a.createElement("span",{className:"tse-text-small"},"Design websites and mobile apps that will be widely adopted and heavily used by our clients.")),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{className:"with-gap",name:"role",type:"radio",value:"PROJECT_MANAGER"}),l.a.createElement("span",null,"Program Manager"))),l.a.createElement("p",null,"           ",l.a.createElement("span",{className:"tse-text-small"},"Lead a team of four to six students to complete a real project for a real client."))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("span",{className:"white-text"},l.a.createElement("b",null,"Link to Resume")),l.a.createElement("input",{type:"text",name:"resume",className:"validate white-text",value:this.state.resume,onChange:this.handleInputChange})),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("span",{className:"white-text"},l.a.createElement("b",null,"Expected Graduation Year")),l.a.createElement("select",{value:this.state.graduation,onChange:function(a){e.handleDirectInputChange("graduation",parseInt(a.target.value))}},l.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select a year"),l.a.createElement("option",{value:"2021"},"2021"),l.a.createElement("option",{value:"2022"},"2022"),l.a.createElement("option",{value:"2023"},"2023"),l.a.createElement("option",{value:"2024"},"2024"),l.a.createElement("option",{value:"2025"},"2025")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("span",{className:"white-text"},l.a.createElement("b",null,"Tell us a bit about yourself.")),l.a.createElement("textarea",{name:"about",className:"materialize-textarea white-text",value:this.state.about,onChange:this.handleInputChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("span",{className:"white-text"},l.a.createElement("b",null,"Why do you want to join TSE?")),l.a.createElement("textarea",{name:"why",className:"materialize-textarea white-text",value:this.state.why,onChange:this.handleInputChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 center-align"},l.a.createElement("button",{className:"waves-effect tse-separation-small btn-large amber darken-1",type:"submit",id:"app-submit"},"Submit"))))))))):""),l.a.createElement("div",{className:"navy"},l.a.createElement("div",{className:"container"},l.a.createElement(m.a,{subtitle:"DECISION CRITERIA",textColor:"white-text",lineColor:"tse-divider-line-dark-yellow"}),l.a.createElement("div",{className:"row center white-text"},l.a.createElement("div",{className:"col l4 s12"},l.a.createElement("div",{className:"tse-apply-circle blue darken-3"},l.a.createElement("i",{className:"fa fa-4x fa-heart white-text"})),l.a.createElement("h4",null,"Passion"),l.a.createElement("p",{className:"tse-text-medium"},"Are you able to demonstrate a genuine passion for problem-solving and social good?")),l.a.createElement("div",{className:"col l4 s12"},l.a.createElement("div",{className:"tse-apply-circle blue darken-3"},l.a.createElement("i",{className:"fa fa-4x fa-code white-text"})),l.a.createElement("h4",null,"Skill"),l.a.createElement("p",{className:"tse-text-medium"},"Do you have the necessary skills to effectively contribute to the projects we work on?")),l.a.createElement("div",{className:"col l4 s12"},l.a.createElement("div",{className:"tse-apply-circle blue darken-3"},l.a.createElement("i",{className:"fa fa-4x fa-book white-text"})),l.a.createElement("h4",null,"Experience"),l.a.createElement("p",{className:"tse-text-medium"},"Do you have any previous, relevant experience such as volunteering?"))),l.a.createElement("div",{className:"row center white-text"},l.a.createElement("div",{className:"col l4 s12"},l.a.createElement("div",{className:"tse-apply-circle blue darken-3"},l.a.createElement("i",{className:"fa fa-4x fa-handshake-o white-text"})),l.a.createElement("h4",null,"Teamwork"),l.a.createElement("p",{className:"tse-text-medium"},"Are you able to work well in teams?")),l.a.createElement("div",{className:"col l4 s12"},l.a.createElement("div",{className:"tse-apply-circle blue darken-3"},l.a.createElement("i",{className:"fa fa-4x fa-thumbs-up white-text"})),l.a.createElement("h4",null,"Attitude"),l.a.createElement("p",{className:"tse-text-medium"},"Do you have a positive and dedicated work ethic?")),l.a.createElement("div",{className:"col l4 s12"},l.a.createElement("div",{className:"tse-apply-circle blue darken-3"},l.a.createElement("i",{className:"fa fa-4x fa-users white-text"})),l.a.createElement("h4",null,"Culture"),l.a.createElement("p",{className:"tse-text-medium"},"How well will you fit in with the rest of us here at TSE?"))),l.a.createElement("div",{className:"row tse-separation-medium"}))),l.a.createElement("div",{className:"container",id:"faq"},l.a.createElement(m.a,{subtitle:"FREQUENTLY ASKED QUESTIONS",textColor:"navy-text",lineColor:"tse-divider-line-dark-yellow"}),l.a.createElement("div",{className:"row navy-text"},l.a.createElement("div",{className:"col s12"},l.a.createElement("h4",null,"What is Triton Software Engineering?"),l.a.createElement("p",{className:"tse-text-medium"},"Triton Software Engineering (TSE) is a multidisciplinary student organization at UC San Diego. We partner with nonprofits to design and develop software, websites, and mobile applications pro-bono for social good, while giving our developers practical, real world experience."),l.a.createElement("p",{className:"tse-text-medium"},"Want to learn more about TSE? ",l.a.createElement(s.Link,{to:"/about",className:"link-text-color"},"Click here!"))),l.a.createElement("div",{className:"col s12"},l.a.createElement("h4",null,"Why should I join TSE?"),l.a.createElement("p",{className:"tse-text-medium"},"If you are passionate about helping others using the skills you learn in college, then TSE is the perfect place for you! We are all about social good, and we hope you share our passion. TSE also offers a close network of like-minded students, and we can also help you build skills that can help you advance your career.")),l.a.createElement("div",{className:"col s12"},l.a.createElement("h4",null,"What kind of experience do I need to join TSE?"),l.a.createElement("p",{className:"tse-text-medium"},"At Triton Software Engineering, we seek students who are hardworking and passionate for social good. We are a project-based organization, so experience working in teams is a plus! You will also need some prior experience with designing or developing, depending on whether you want to be a developer or designer respectively."),l.a.createElement("p",{className:"tse-text-medium"},"Designers must have working knowledge of the standard design process (i.e. stages of research, ideation, testing) and also some experience with your own UI/UX work (if you have a portfolio to show us, that’d be fantastic!)."),l.a.createElement("p",{className:"tse-text-medium"},"Developers must be familiar with any one OOP language (Java, Python, and C/C++ are common ones). For bonus points, a working knowledge of web technologies (e.g. HTTP, HTML/DOM, JavaScript, CSS, AJAX, REST APIs) is impressive, but definitely not required as we will teach you the technologies necessary to contribute.")),l.a.createElement("div",{className:"col s12"},l.a.createElement("h4",null,"What is the TSE Recruitment Process like?"),l.a.createElement("p",{className:"tse-text-medium"},"TSE recruits new members at the beginning of every Fall quarter. In 2019, we accepted a total of 31 members from 167 applicants."),l.a.createElement("p",{className:"tse-text-medium"},"There are three stages: a resume screen, a quick behavioral phone chat, and an in-person technical interview. Due to the current circumstances, we’ll be shifting our in-person interviews online. In 2020, we’ll be holding two info sessions regarding this process. Please keep an eye on our Facebook page for more details!"),l.a.createElement("p",{className:"tse-text-medium"},"Interested in applying? ",l.a.createElement(s.Link,{to:"/students#apply",className:"link-text-color"},"Click here!"))),l.a.createElement("div",{className:"col s12"},l.a.createElement("h4",null,"How many project teams are there? How are TSE projects structured?"),l.a.createElement("p",{className:"tse-text-medium"},"The number of project teams in TSE depends on the number of nonprofits we are able to secure collaborations with every year. For the 2019-2020 school year, we had 7 project teams."),l.a.createElement("p",{className:"tse-text-medium"},"TSE's structure consists of our board, a design team, and 4-6 project-based teams. Our design team is a team of 4-5 designers led by a design lead. Each development team is made up of a project leader and 4-5 developers. Teams work independently of one another to create software for a specific non-profit they have been assigned to.")),l.a.createElement("div",{className:"col s12"},l.a.createElement("h4",null,"What does being a designer look like at TSE?"),l.a.createElement("p",{className:"tse-text-medium"},"Designers communicate closely with our nonprofit clients in order to craft user flows, wireframes, and prototypes that align with their needs. Designers often take on projects in pairs. They are the ones creating the detailed plan for the end solution, which is then eventually handed off to TSE developers. There’s a variety of types of projects, ranging from website rebranding to internal software tools.")),l.a.createElement("div",{className:"col s12"},l.a.createElement("h4",null,"What does being a developer look like at TSE?"),l.a.createElement("p",{className:"tse-text-medium"},"We emulate the Agile Workflow to give our developers some insight on industry standards. Developers complete weekly tasks assigned to them by their project manager during their team meetings. The work that you will be doing depends on your client. For most web development work, we tend to stick to the MERN stack, and for most cross-platform mobile development, we focus on using React Native with Expo. This means that, as a whole, TSE ends up with many JavaScript-based applications. However, depending on the client's needs, we have been known to use other technologies, such as Java and PHP.")),l.a.createElement("div",{className:"col s12"},l.a.createElement("h4",null,"How will TSE operate under the ongoing pandemic?"),l.a.createElement("p",{className:"tse-text-medium"},"We are going fully remote. Our recruitment process will be online, and we will do our best to provide as much support as possible through Information Sessions and various panels. All teams in TSE will continue to work remotely with weekly check-ins. We will be continuing our regular virtual workshops and social events. Please visit our website and Facebook page for the most up-to-date information.")))),l.a.createElement("div",{className:"tse-slogan-container"},l.a.createElement("div",{className:"container"},l.a.createElement(m.a,{textColor:"navy-text",lineColor:"tse-divider-line-dark-yellow",caption:"Develop for social good. Design for real world clients. Problem-solve with us."}))),l.a.createElement(d.a,null))},n}(l.a.Component);a.default=p;var h="3737201383"}}]);
//# sourceMappingURL=component---src-pages-students-js-3cd4c18a79e078bb9904.js.map