import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

import BookModal from "../components/BookModal";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadBooks = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/books");
      console.log(response.data);
      setBooks(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => loadBooks(), []);

  return (
    <div style={{}}>
      <Container fluid className="p-3">
        <Row>
          <Col
            md={4}
            lg={3}
            style={{
              position: "fixed",
              height: "100%",
              width: "100%",
              backgroundColor: "#0b3c5d",
              marginLeft: "-2px",
              marginTop: "-15px",
            }}
          >
            <h3 style={{ color: "white", marginTop: "15px" }}>Filters</h3>
            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ color: "white" }}>Book Name</Form.Label>
                <Form.Control type="text" placeholder="Book Subject" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ color: "white" }}>Price</Form.Label>
                <Form.Control type="text" placeholder="Amount in Rupees" />
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
          <Col className="justify-content-center align-items-center">
            {loading ? (
              <Loader />
            ) : (
              <>
                {books.map((book) => (
                  <BookCard key={book._id} book={book} />
                ))}
                <BookModal
                  open={open}
                  setOpen={setOpen}
                  loadBooks={loadBooks}
                />
                <Button
                  onClick={() => setOpen(true)}
                  className="rounded-circle"
                  style={{
                    position: "fixed",
                    right: "18px",
                    bottom: "15px",
                    backgroundColor: "#328cc1",
                    borderColor: "white",
                    fontSize: "18px",
                  }}
                >
                  +
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Books;
