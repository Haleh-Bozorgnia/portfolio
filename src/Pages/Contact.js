import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Col, Row, Form, ListGroup } from "react-bootstrap";
import "../style.css"
const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
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
          <div
            className="contact-form"
            style={{ width: "75%", margin: "0 auto", padding: "10px" }}
          >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom03">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" required placeholder="Message" />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </div>
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
            <p>
              As a Full-Stack developer and Computer Science graduate, I have a
              significant impact on the performance of programs through my
              skills in HTML, CSS, JavaScript, and jQuery. I have the knowledge
              and ability to create practical and user-friendly websites. My
              teamwork and problem-solving skills have been developed from years
              of working as an IT expert in a governmental bank, which allows me
              to effectively communicate with customers and teams. Finding
              creative solutions, optimizing website performance, and
              simplifying inspires me to do a great job. Collaboration is at the
              core of my process, as I believe in the power of shared ideas and
              diverse perspectives to create exceptional results.
            </p>
            <p>
              <div className="contact-info">
                <a href="www.linkedin.com/in/haleh-bozorgnia">Linkedin</a>

                <a href="https://github.com/Haleh-Bozorgnia/">Github</a>
              </div>
              <div className="contact-info">
                <h6>
                  <span style={{ color: "#f503f5" }}>Email:</span>{" "}
                  bozorgnia2010@gmail.com
                </h6>
                <h6>
                  {" "}
                  <span style={{ color: "#f503f5" }}>Phone:</span> 604-802-6026
                </h6>
              </div>
            </p>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;
