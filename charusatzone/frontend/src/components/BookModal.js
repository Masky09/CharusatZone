import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";

const BookModal = ({ open, setOpen, loadBooks }) => {
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = {
        booksemail: email,
        booksprice: price,
        booksdescription: desc,
      };

      await axios.post(`http://localhost:5000/books`, data);
      setOpen(false);
      loadBooks();
    } catch (error) {
      console.log(error.message);
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
            Sell Book
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label style={{ color: "#0b3c5d" }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Contact email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label style={{ color: "#0b3c5d" }}>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Book Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="fromDescription">
              <Form.Label style={{ color: "#0b3c5d" }}>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="Book Name"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formFile">
              <Form.Label style={{ color: "#0b3c5d" }}>Upload Image</Form.Label>
              <Form.Control type="file" placeholder="Upload Image" />
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
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookModal;
