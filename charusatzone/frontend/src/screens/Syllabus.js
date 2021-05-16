import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Syllabus = () => {
  return (
    <>
      <Container fluid className="p-2">
        <Row>
          <Col
            md={4}
            lg={3}
            style={{
              position: "fixed",
              height: "100%",
              width: "100%",
              backgroundColor: "#0b3c5d",
              marginTop: "-15px",
            }}
          >
            <h3 style={{ color: "white", marginTop: "20px" }}>Filters</h3>
            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ color: "white" }}>Department</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Department Name(E.g CSE)"
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
                Search
              </Button>
            </Form>
          </Col>

          <Col>
            <Card
              style={{
                width: "35rem",
                marginLeft: "415px",
                borderColor: "#0b3c5d",
                borderWidth: "3px",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: "#0b3c5d" }}>CSE</Card.Title>
                <Card.Text style={{ color: "#0b3c5d" }}>
                  Syllabus of CSE
                </Card.Text>
                <Card.Link style={{ textDecoration: "underline" }} href="#">
                  Go to Syllabus
                </Card.Link>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "35rem",
                marginLeft: "415px",
                marginTop: "20px",
                borderColor: "#0b3c5d",
                borderWidth: "3px",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: "#0b3c5d" }}>CE</Card.Title>
                <Card.Text style={{ color: "#0b3c5d" }}>
                  Syllabus of CE
                </Card.Text>
                <Card.Link style={{ textDecoration: "underline" }} href="#">
                  Go to Syllabus
                </Card.Link>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "35rem",
                marginLeft: "415px",
                marginTop: "20px",
                borderColor: "#0b3c5d",
                borderWidth: "3px",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: "#0b3c5d" }}>IT</Card.Title>
                <Card.Text style={{ color: "#0b3c5d" }}>
                  Syllabus of IT
                </Card.Text>
                <Card.Link style={{ textDecoration: "underline" }} href="#">
                  Go to Syllabus
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Syllabus;
