import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

const SignupForm = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = {
        firstName,
        lastName,
        email,
        password,
      };

      //console.log(data);
      await axios.post("http://localhost:5000/signup", data);
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      fluid
      className="justify-content-center align-items-center"
      style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        backgroundColor: "#0b3c5d",
      }}
    >
      <Container
        style={{
          marginLeft: "540px",
          marginTop: "50px",
        }}
      >
        <h1 className="my-3" style={{ color: "white" }}>
          Register
        </h1>
        <Row>
          <Col md={6}>
            <Form onSubmit={onSubmitHandler}>
              <Form.Group controlId="formFirstName">
                <Form.Label style={{ color: "white" }}>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label style={{ color: "white" }}>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ color: "white" }}>
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ color: "white" }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: "#328cc1",
                  borderColor: "white",
                  marginTop: "10px",
                }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignupForm;
