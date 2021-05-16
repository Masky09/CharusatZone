import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Form, Container, Button } from "react-bootstrap";
import NoteModal from "../components/NoteModal";
import NotesCard from "../components/NotesCard";
import Loader from "../components/Loader";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadNotes = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/notes");
      setNotes(response.data.notes);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => loadNotes(), []);

  return (
    <div>
      <Container fluid className="p-4">
        <Row>
          <Col
            md={4}
            lg={3}
            style={{
              position: "fixed",
              height: "100%",
              width: "100%",
              backgroundColor: "#0b3c5d",
              marginLeft: "-9px",
              marginTop: "-23px",
            }}
          >
            <h3 style={{ color: "white", marginTop: "15px" }}>Filters</h3>
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label style={{ color: "white" }}>Branch</Form.Label>
                <Form.Control as="select">
                  <option>CE</option>
                  <option>CSE</option>
                  <option>IT</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label style={{ color: "white" }}>Semester</Form.Label>
                <Form.Control as="select">
                  <option>1/2</option>
                  <option>3/4</option>
                  <option>5/6</option>
                  <option>7/8</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ color: "white" }}>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject name" />
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
          <Col md={8} lg={9}>
            {loading ? (
              <Loader />
            ) : (
              <>
                {notes.map((note) => (
                  <NotesCard key={note._id} note={note} />
                ))}
                <NoteModal
                  open={open}
                  setOpen={setOpen}
                  loadNotes={loadNotes}
                />
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-circle"
                  onClick={() => setOpen(true)}
                  style={{
                    position: "fixed",
                    right: "25px",
                    bottom: "15px",
                    backgroundColor: "#328cc1",
                    borderColor: "white",
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

export default Notes;
