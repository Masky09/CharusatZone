import React from "react";

const BookCard = ({ book }) => {
  return (
    <>
      <div
        className="card mb-3"
        style={{
          maxWidth: "1060px",
          marginTop: "10px",
          marginLeft: "380px",
          borderColor: "#0b3c5d",
          borderWidth: "3px",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="BOOKS.png"
              style={{ marginLeft: "-1px" }}
              alt="Book pic"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#0b3c5d" }}>
                Book Name: {book.booksdescription}
              </h5>
              <p className="card-text" style={{ color: "#328cc1" }}>
                • Price : {book.booksprice}
              </p>
              <p className="card-text" style={{ color: "#328cc1" }}>
                • Contact Email: {book.booksemail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
