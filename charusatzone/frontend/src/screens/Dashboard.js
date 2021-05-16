import React from "react";
import { Image, Row, Col, Container, CardDeck, Card } from "react-bootstrap";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#0b3c5d" }}>
      <Container style={{ height: "680px", maxWidth: "95%" }}>
        <Row>
          <Col style={{ marginTop: "100px", marginLeft: "50px" }}>
            <Image src="HeroImage.jpg" fluid />
          </Col>
          <Col style={{ marginTop: "250px", marginLeft: "100px" }}>
            <h2 style={{ color: "white" }}>CHARUSATzone</h2>
            <p style={{ color: "white" }}>
              🏳️ A one stop destination for students to share notes and sell
              their old books.
            </p>
          </Col>
        </Row>
      </Container>

      <Container style={{ maxWidth: "90%" }}>
        <Row>
          <Col>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="books.jpg" />
                <Card.Body>
                  <Card.Title>Sell and Buy Books</Card.Title>
                  <Card.Text>
                    🡲Visit the Books section and cick the Plus Icon to sell a
                    book and view the ads to purchase a book.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="notes.jpg" />
                <Card.Body>
                  <Card.Title>Get and Share Notes</Card.Title>
                  <Card.Text>
                    🡲Visit the Notes section in dropdown menu of Study Material
                    and add notes via the Plus Icon and also view notes.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="syllabus.jpg" />
                <Card.Body>
                  <Card.Title>See Syllabus</Card.Title>
                  <Card.Text>
                    🡲Visit the Syllabus section in dropdown menu of Study
                    Material and view the syllabus for your respective branch.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
