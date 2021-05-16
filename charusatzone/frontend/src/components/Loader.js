import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <>
      <Spinner
        animation="border"
        style={{
          position: "absolute",
          top: "100%",
          left: "45%",
          color: "#0b3c5d",
        }}
      />
    </>
  );
};

export default Loader;
