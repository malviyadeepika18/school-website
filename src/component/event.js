import React from 'react'

import { Container, Row, Col, Card, CardBody, Navbar } from "reactstrap";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import imagekidss from "../image/kids.avif"

function Event() {
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
             Events
            </h3>
          </div>
        </Container>
      </div>
       <div className="section-academic">
      <Container className="my-5">
       

        <Row className="mt-4">
          <h2 className="text-center offer-title">Our Upcoming Events </h2>
          
          <Col md="4">
  <Card className="academic-card mt-5">
    <div className="academic-img-wrapper">
      <img
         src={imagekidss}
        alt="Science Fair"
      />

    </div>
  <CardBody className="event-content">
  <div className="event-header">
    <h5 className="event-title">Science Fair</h5>
    <span className="event-date">📅 July 15, 2024</span>
  </div>

  <p className="event-desc">
    Students will showcase innovative science projects and experiments.
  </p>
</CardBody>

  </Card>
</Col>
      <Col md="4">
  <Card className="academic-card mt-5">
    <div className="academic-img-wrapper">
      <img
         src={imagekidss}
        alt="Science Fair"
      />

    </div>
  <CardBody className="event-content">
  <div className="event-header">
    <h5 className="event-title">Science Fair</h5>
    <span className="event-date">📅 July 15, 2024</span>
  </div>

  <p className="event-desc">
    Students will showcase innovative science projects and experiments.
  </p>
</CardBody>

  </Card>
</Col>
      <Col md="4">
  <Card className="academic-card mt-5">
    <div className="academic-img-wrapper">
      <img
         src={imagekidss}
        alt="Science Fair"
      />

    </div>
  <CardBody className="event-content">
  <div className="event-header">
    <h5 className="event-title">Science Fair</h5>
    <span className="event-date">📅 July 15, 2024</span>
  </div>

  <p className="event-desc">
    Students will showcase innovative science projects and experiments.
  </p>
</CardBody>

  </Card>
</Col>

        </Row>
      </Container>
    </div>


    </>
  )
}

export default Event