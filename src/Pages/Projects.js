import React from "react";
import project1 from "../assets/project1.jpeg"
import project2 from "../assets/project2.jpeg"
import '../style.css'
function Projects(props) {
   return (
     <div className="project-container">
       <div className="project-properties">
         <img src={project1} alt="project1" className="project-img" />
         <h4 className="project-title">Book Finder Application</h4>
         <p className="project-description">
           An app where users can search books with titles and receive
           information about all books that have user words in their titles.
         </p>
         <br></br>
         <br></br>
         <h5 className="project-skills">Skills</h5>
         <p className="project-skills-desc">
           JavaScript, Node.js, HTML, CSS, JSon{" "}
         </p>
         <br></br>
         <a
           href="https://project1-five-swart.vercel.app/"
           className="project-btn"
         >
           Link to project
         </a>
       </div>
       <div className="project-properties">
         <img src={project2} alt="project1" className="project-img" />
         <h4 className="project-title">Expense Management Application</h4>
         <p className="project-description">
           This app enables users to save details of their expenses. Users can
           sign up and log in with a username and password. The user will be
           able to enter, edit, search, and delete receipt information
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
       </div>
     </div>
   );
    
}
export default Projects;
