import React from "react";
import project1 from "../assets/project1.jpeg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"
import project4 from "../assets/project4.jpg"
import '../style.css'
function Projects(props) {
   return (
     <div className="project-container">
       <div className="project-properties">
         <img src={project1} alt="project1" className="project-img" />
         <h4 className="project-title">Book Finder </h4>
         <p className="project-description">
           An app where users can search books with titles and receive
           information about all books that have user words in their titles.
         </p>
         <br></br>
         <br></br>
         <h5 className="project-skills">Skills</h5>
         <p className="project-skills-desc">
           JavaScript, Node.js, HTML, CSS, JSon
         </p>
         <br></br>
         <a
           href="https://project1-five-swart.vercel.app/"
           className="project-btn"
         >
           Link to project
         </a>
         <a
           href="https://github.com/Haleh-Bozorgnia/project1"
           className="project-btn"
         >
           Link to Github
         </a>
       </div>
       <div className="project-properties">
         <img
           src={project2}
           alt="project1"
           className="project-img"
           style={{ paddingTop: "12px" }}
         />
         <h4 className="project-title">Expense Management </h4>
         <p className="project-description">
           This app enables users to save details of their expenses. Users can
           sign up and log in with a username and password. The user will be
           able to enter, edit, search, and delete receipt information.
         </p>
         <h5 className="project-skills">Skills</h5>
         <p className="project-skills-desc">
           JavaScript, Node.js, HTML, CSS, EJS, MongoDB, Express
         </p>
         <br></br>

         <a
           href="https://expensesmanagement.onrender.com/"
           className="project-btn"
         >
           Link to project
         </a>
         <a
           href="https://github.com/Haleh-Bozorgnia/ExpenseManagement"
           className="project-btn"
         >
           Link to Github
         </a>
       </div>
       <div className="project-properties">
         <img
           src={project3}
           alt="project3"
           className="project-img"
           //  style={{ paddingTop: "12px" }}
         />
         <h4 className="project-title">Vocabuilder </h4>
         <p className="project-description">
           This full stack web is for the user who wants to learn a new language
           and memorize new words. Users can view, post, edit, and delete
           vocabulary and its translation, pronunciation.
         </p>
         <h5 className="project-skills">Skills</h5>
         <p className="project-skills-desc">
           Javascript, React, Django, PostgreSQL
         </p>
         <br></br>

         <a
           href="https://vocabuilder-frontend.vercel.app/"
           className="project-btn"
         >
           Link to project
         </a>
         <a
           href="https://github.com/Haleh-Bozorgnia/vocabuilder-frontend"
           className="project-btn"
         >
           Link to Github
         </a>
       </div>
       <div className="project-properties">
         <img
           src={project4}
           alt="project1"
           className="project-img"
           style={{ paddingTop: "12px" }}
         />
         <h4 className="project-title">Sale Service </h4>
         <p className="project-description">
           A full CRUD (Create, Read, Update, Delete) app for people to sell
           their services to others is a web application that facilitates the
           exchange of services.
         </p>
         <h5 className="project-skills">Skills</h5>
         <p className="project-skills-desc">
           TypeScript, React, HTML, TailwindCSS, Django, PostgreSQL, TailwindCSS
         </p>

         <a
           href="https://deluxe-crostata-d701d0.netlify.app/"
           className="project-btn"
         >
           Link to project
         </a>
         <a
           href="https://github.com/Haleh-Bozorgnia/Capstone-Project-Frontend"
           className="project-btn"
         >
           Link to Github
         </a>
       </div>
     </div>
   );
    
}
export default Projects;
