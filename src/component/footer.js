import React from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Wave Shape */}
      <div className="footer-wave"></div>

      <Container>
        <Row className="footer-content">
       
<Col md="3" sm="6">
  <h5 className="footer-title">Quick Links</h5>
  <ul className="footer-links">
    <li>
      <Link to="/about-us">About Us</Link>
    </li>
    <li>
      <Link to="/admissions">Admissions</Link>
    </li>
    <li>
      <Link to="/academic">Academics</Link>
    </li>
    <li>
      <Link to="/event">Events</Link>
    </li>
    <li>
      <Link to="/gallery">Gallery</Link>
    </li>
  </ul>
</Col>
          {/* Contact Us */}
          <Col md="3" sm="6">
            <h5 className="footer-title">Contact Us</h5>
           <ul className="footer-contact">
  <li>
    <i className="fas fa-map-marker-alt"></i>
    Fortlane Road, Loner
  </li>
  <li>
    <i className="fas fa-phone-alt"></i>
    +113 456 7890
  </li>
  <li>
    <i className="fas fa-envelope"></i>
   prsysinternational@gmail.com
  </li>
</ul>

          </Col>

          {/* Follow Us */}
          <Col md="3" sm="6">
            
            <h5 className="footer-title">Follow Us</h5>

<div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <i className="fab fa-facebook-f"></i>
  </a>

  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <i className="fab fa-twitter"></i>
  </a>

  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <i className="fab fa-instagram"></i>
  </a>

  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
    <i className="fab fa-linkedin-in"></i>
  </a>

  <a href="https://youtube.com" target="_blank" rel="noreferrer">
    <i className="fab fa-youtube"></i>
  </a>
</div>

          </Col>

          {/* Newsletter */}
          <Col md="3" sm="6">
            <h5 className="footer-title">Subscribe to Our Newsletter</h5>
            <div className="newsletter">
              <Input type="email" placeholder="Enter your email" />
              <Button className="org-btn"variant="contained" color="warning">Subscribe</Button>
                   
            </div>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          © 2025 KID'S RITES INTERNATIONAL SCHOOL. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
