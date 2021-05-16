import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer
        style={{
          marginTop: "150px",
          backgroundColor: "#f8cf40",
          maxWidth: "100%",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6" style={{ color: "#041f60" }}>
              <h6 style={{ marginTop: "50px" }}>About</h6>
              <p class="text-justify">
                CHARUSATzone is a simple solution for students of the university
                to view and upload notes of their subjects specific to their
                semester and branch. This also serves as a platform to sell and
                buy books.
              </p>
            </div>

            <div class="col-xs-6 col-md-3" style={{ color: "#041f60" }}>
              <h6 style={{ marginTop: "50px" }}>Tech Stack</h6>
              <ul class="footer-links">
                <li>Express.js</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>MongoDB</li>
                <li>Bootstrap</li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3" style={{ color: "#041f60" }}>
              <h6 style={{ marginTop: "50px" }}>About Us</h6>
              <ul>
                <li>
                  <p>Krutik Patel- Backend and Database</p>
                </li>
                <li>
                  <p>Meet Prajapati- Backend Authentication</p>
                </li>
                <li>
                  <p>Devrajsinh Raj- Frontend Development</p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
