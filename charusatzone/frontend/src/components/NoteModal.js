import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import Loader from "../components/Loader";

const NoteModal = ({ open, setOpen, loadNotes }) => {
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = {
        notesSemester: semester,
        notesBranch: branch,
        notesSubject: subject,
        notesLink: link,
      };

      await axios.post("http://localhost:5000/notes", data);
      setLoading(false);
      setOpen(false);
      loadNotes();
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        show={open}
        onHide={() => setOpen(!open)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ borderColor: "#0b3c5d", borderWidth: "10px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ color: "#0b3c5d" }}
          >
            Add Notes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label style={{ color: "#0b3c5d" }}>Branch</Form.Label>
              <Form.Control
                as="select"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              >
                <option></option>
                <option>CE</option>
                <option>CSE</option>
                <option>IT</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label style={{ color: "#0b3c5d" }}>Semester</Form.Label>
              <Form.Control
                as="select"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
              >
                <option></option>
                <option>1/2</option>
                <option>3/4</option>
                <option>5/6</option>
                <option>7/8</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{ color: "#0b3c5d" }}>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject name(chapter name)"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{ color: "#0b3c5d" }}>
                Google Drive Link
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Add the google drive link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#328cc1" }}
            onClick={() => setOpen(!open)}
          >
            Close
          </Button>
          <Button
            style={{ backgroundColor: "#328cc1" }}
            variant="primary"
            type="submit"
            onClick={onSubmitHandler}
          >
            {loading ? <Loader /> : ""}Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NoteModal;
