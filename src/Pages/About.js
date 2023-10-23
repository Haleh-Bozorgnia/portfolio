import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import '../style.css'
import Pic from "../assets/Haleh-pic.jpeg"
const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <div style={{ display: "flex", justifyContent:"space-between"}}>
          <h2>About</h2>
          <img src={Pic} alt="my image" style={{borderRadius:"50%" , height:"120px", marginBottom:"20px"}}/>
        </div>

        <>
          <article>
            <p className="about-container">
              As a Full-Stack developer and Computer Science graduate, I have a
              significant impact on the performance of programs through my
              skills in JavaScript, React, Python, and jQuery. I have the
              knowledge and ability to create practical and user-friendly
              websites. My teamwork and problem-solving skills have been
              developed from years of working as an IT expert in a governmental
              bank, which allows me to effectively communicate with customers
              and teams. Finding creative solutions, optimizing website
              performance, and simplifying inspires me to do a great job.
              Collaboration is at the core of my process, as I believe in the
              power of shared ideas and diverse perspectives to create
              exceptional results.
            </p>
          </article>
        </>
      </div>
    </>
  );
};

export default About;
