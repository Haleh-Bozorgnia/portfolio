import React from "react";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import "../style.css";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <h2>Contact</h2>
      <Row>
        <Col>
          <div style={{ marginTop: "10px",marginLeft:"25px" }}>
            <h4>Phone: (604)802-6026</h4>
            <h4>Mail: bozorgnia2010@gmail.com</h4>
          </div>
          <div
            className="contact-form"
            style={{ width: "75%", margin: "0 auto", padding: "10px" }}
          ></div>
        </Col>
        <Col>
          <div
            className="contact-data"
            style={{
              width: "85%",
              margin: "5px auto",
              marginLeft: "10px",
              textAlign: "justify",
            }}
          >
            <div className="contact-info">
              <a href="https://www.linkedin.com/in/haleh-bozorgnia">Linkedin</a>
              <a href="https://github.com/Haleh-Bozorgnia/">Github</a>
            </div>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
}
export default Contact
