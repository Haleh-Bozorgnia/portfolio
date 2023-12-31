import '../style.css'
import HTML from "../assets/html.png";
import CSS from "../assets/css.png"
import JavaScript from "../assets/javascript.png"
import React from "../assets/react.png"
import MongoDB from "../assets/mongo.png"
import Node from "../assets/node.png"
import GitHub from "../assets/github.png"
import SQL from "../assets/sql.png"
import DJango from "../assets/django.png"
import Tailwind from "../assets/tailwind-css.svg"
import Typescript from "../assets/typescript-plain.svg"
import Ejs from "../assets/ejs.svg"
function Skills() {
  return (
    <div className="skillContainer">
      <div>
        <p className="skill-desc">Skills</p>
      </div>
      <div className="skills">
        <div>
          <img src={HTML} alt="HTML icon" className="killImg" />
          <p>HTML</p>
        </div>
        <div>
          <img src={CSS} alt="CSS icon" className="killImg" />
          <p>CSS</p>
        </div>
        <div>
          <img src={JavaScript} alt="JavaScript icon" className="killImg" />
          <p>JavaScript</p>
        </div>
        <div>
          <img src={React} alt="React icon" className="killImg" />
          <p>React</p>
        </div>
        <div>
          <img src={MongoDB} alt="MongoDB icon" className="killImg" />
          <p>MongoDB</p>
        </div>
        <div>
          <img src={Node} alt="Node icon" className="killImg" />
          <p>Node</p>
        </div>
        <div>
          <img src={GitHub} alt="GitHub icon" className="killImg" />
          <p>GitHub</p>
        </div>
        <div>
          <img src={SQL} alt="SQL icon" className="killImg" />
          <p>SQL</p>
        </div>
        <div>
          <img src={DJango} alt="DJango icon" className="killImg" />
          <p>DJango</p>
        </div>
        <div>
          <img src={Tailwind} alt="tailwind icon" className="killImg" />
          <p>TailwindCSS</p>
        </div>{" "}
        <div>
          <img src={Typescript} alt="typescript icon" className="killImg" />
          <p>TailwindCSS</p>
        </div>
        <div>
          <img src={Ejs} alt="eja icon" className="killImg" />
          <p>Ejs</p>
        </div>
      </div>
    </div>
  );
}
export default Skills;

