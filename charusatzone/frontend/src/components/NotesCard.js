import React from "react";
import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";

const NotesCard = ({ note }) => {
  return (
    <>
      <Container fluid>
        <Card
          style={{
            width: "63rem",
            marginTop: "20px",
            height: "17rem",
            marginLeft: "370px",
            borderColor: "#0b3c5d",
            borderWidth: "3px",
          }}
        >
          <Card.Body>
            <Card.Title style={{ color: "#0b3c5d", fontSize: "24px" }}>
              Notes
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem style={{ color: "#328cc1", fontSize: "17px" }}>
              Subject: {note.notesSubject}
            </ListGroupItem>
            <ListGroupItem style={{ color: "#328cc1", fontSize: "17px" }}>
              Branch: {note.notesBranch}
            </ListGroupItem>
            <ListGroupItem style={{ color: "#328cc1", fontSize: "17px" }}>
              Semester: {note.notesSemester}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link
              href={note.notesLink}
              style={{
                float: "right",
                font: "bold",
                color: "#328cc1",
                fontSize: "17px",
                textDecoration: "underline",
              }}
            >
              Go to Notes
            </Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default NotesCard;
