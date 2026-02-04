import React from 'react'

import { Container, Row, Col, Card, CardBody, Navbar } from "reactstrap";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
// import imagekidss from "../image/kids.avif"
import yogaimge from "../image/WhatsApp Image 2026-02-04 at 10.32.03 AM (2).jpeg"
import polaimg from "../image/WhatsApp Image 2026-02-04 at 10.32.20 AM.jpeg"
import imagekidss from "../image/WhatsApp Image 2026-02-04 at 10.32.15 AM (2).jpeg";

function Event() {


  const events = [
 {
    id: 1,
    image: imagekidss,
    date: "Aug 09, 2024",
    title: "Rakhi Making Competition",
      desc: "Students will showcase innovative science projects and experiments.",
  },
  {
    id: 2,
    image: yogaimge,
    date: "June 21, 2025",
    title: "Interntional Yoga Day",
    desc: "Students will create beautiful handmade rakhis.",
  },
  
 
   {
    id: 3,
    image: polaimg,
    date: "Aug 23, 2025",
    title: "Pola Celebration",
    desc:"Celebrating Pola to teach students values of gratitude, culture, and respect for nature."
  },
];

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
          
  {events.map((event) => (
    <Col md="4" key={event.id}>
      <Card className="academic-card mt-5">
        <div className="academic-img-wrapper">
          <img src={event.image} alt={event.title} />
        </div>

        <CardBody className="event-content">
          <div className="event-header">
            <h5 className="event-title">{event.title}</h5>
            <span className="event-date">📅 {event.date}</span>
          </div>

          <p className="event-desc">{event.desc}</p>
        </CardBody>
      </Card>
    </Col>
  ))}

        </Row>
      </Container>
    </div>


    </>
  )
}

export default Event