import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="row footer">
        <div className="col-md-3 col-sm-6 px-4">
          <h5
            className="text-center"
            style={{
              color: "black",
              backgroundColor: "rgb(121, 206, 84)",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
           Available across
          </h5>
          <p>
          Mumbai
          </p>
          <p>
          Delhi
          </p>
          <p>
          Gujarat
          </p>
        </div>
        <div className="col-md-3 col-sm-6 footer-links">
          <h5
            className="text-center"
            style={{
              color: "black",
              backgroundColor: "rgb(121, 206, 84)",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Links
          </h5>
          <p>
            <a href="https://www.greenyatra.org/" target='_blank'>Green Yatra</a>
          </p>
          <p>
            <a href="https://www.saytrees.org/">Say Trees</a>
          </p>
        </div>
        <div className="col-md-3 col-sm-6 text-center">
          <h5
            style={{
              color: "black",
              backgroundColor: "rgb(121, 206, 84)",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Social Links
          </h5>
          <a href="https://www.facebook.com/">
            <i className="fab fa-facebook social-icons"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram social-icons"></i>
          </a>
          <a href="https://twitter.com/i/flow/login">
            <i className="fab fa-twitter social-icons"></i>
          </a>
          <a href="https://telegram.org/">
            <i className="fab fa-telegram social-icons"></i>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <h5
            className="text-center"
            style={{
              color: "black",
              backgroundColor: "rgb(121, 206, 84)",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Contact Us
          </h5>
          <p>
            <i className="fas fa-mail-bulk text-primary footer-icons"></i>{" "}
            planting@help.com
          </p>
          <p>
            <i className="fas fa-phone text-primary footer-icons"></i> +91 2525
            2525
          </p>
        </div>
      </div>
      <div className="text-center">
        <p>Planting Help &copy; 2022</p>
      </div>
    </>
  );
};

export default Footer;
