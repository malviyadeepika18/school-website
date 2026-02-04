import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";


const ContactAddress = () => {
  return (
    <>
    <div className="about-header-full">
        <Container>
          <div className="testimonial-header text-center justify-content-center">
            
            <div className="header-icons">
              <span className="dot blue"></span>
              <span className="dot orange"></span>
            </div>

            <h3 className="section-title text-white">
            Contact 
            </h3>
          </div>
        </Container>
      </div>
    <Container className="contact-section my-5">
      <h2 className="section-title offer-title">Contact Address</h2>

      <Row className="mt-4">
        <Col md="4">
          <Card className="contact-card  mb-4">
            <CardBody>
              <div className="contact-item">
                <LocationOnIcon className="contact-icon" />
                <div>
                  <h6>Postal Address</h6>
                  <p>Plot No. 3, Maa Kali Nagar, Pawanagon Road, Ghongad Kamptee, Nagpur - 441001 (MH)</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col md="4">
          <Card className="contact-card mb-4">
            <CardBody>
              <div className="contact-item">
                <EmailIcon className="contact-icon" />
                <div>
                  <h6>Email</h6>
                  <p>kidsritesint.school01@gmail.com</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col md="4">
          <Card className="contact-card  mb-4">
            <CardBody>
              <div className="contact-item">
                <CallIcon className="contact-icon" />
                <div>
                  <h6>Phone</h6>
                  <p>9112398739  /
                    9096944337</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
       <Row>
        <Col xs="12">
          <div className="map-container">
            <iframe
              title="School Location"
              src="https://www.google.com/maps?q=Fortlane+Road+Loner+Maharashtra&output=embed"
             
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ContactAddress;
