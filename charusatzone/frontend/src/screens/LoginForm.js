import React, { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import axios from "axios";

const LoginForm = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = {
        email,
        password,
      };
      await axios.post("http://localhost:5000/login", data);
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }

    console.log(email, password);
  };

  return (
    <div
      fluid
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
          marginTop: "100px",
        }}
      >
        <h1 className="my-3" style={{ color: "white" }}>
          Sign In
        </h1>
        <Row>
          <Col md={6}>
            <Form onSubmit={onSubmitHandler}>
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

export default LoginForm;
