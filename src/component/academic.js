
import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Navbar } from "reactstrap";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Footer from "../component/footer"
// import imagekidss from "../image/kids.avif"
import { Dialog, IconButton } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import yogaimge from "../image/WhatsApp Image 2026-02-04 at 10.32.03 AM (2).jpeg"
import polaimg from "../image/WhatsApp Image 2026-02-04 at 10.32.20 AM.jpeg"
import imagekidss from "../image/WhatsApp Image 2026-02-04 at 10.32.15 AM (2).jpeg";
const Academic = () => {



const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs("2024-07-15"));


const academicEvents = [
  {
    id: 1,
    image: imagekidss,
    date: "Aug 09, 2024",
    title: "Rakhi Making Competition",
  },
  {
    id: 2,
    image: yogaimge,
    date: "June 21, 2025",
    title: "Interntional Yoga Day",
  },
   {
    id: 3,
    image: polaimg,
    date: "Aug 23, 2025",
    title: "Pola Celebration",
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
             Academic Programs
            </h3>
          </div>
        </Container>
      </div>
    <div className="section-academic">
      <Container className="my-5">
       

        <Row className="mt-4">
          <h2 className="text-center offer-title">We Offer An Exclusive </h2>
           <h2 className="text-center offer-title"> Program For Kids</h2>
          {academicEvents.map((event) => (
    <Col md="4" key={event.id}>
      <Card className="academic-card mb-4">
        <div className="academic-img-wrapper">
          <img src={event.image} alt={event.title} />

          <div className="calendar-badge">
            <CalendarMonthIcon className="calendar-icon" />
            <span>{event.date}</span>
          </div>

          <div className="academic-overlay">
            <h5>{event.title}</h5>
          </div>
        </div>
      </Card>
    </Col>
  ))}<Col xs="12" className="text-center mt-4">
  <Button
    variant="contained"
    color="warning"
    component={NavLink}
    to="/event"
    className="apply-center-btn"
    endIcon={<ArrowForwardIosIcon />}
  >
    View All Events
  </Button>
</Col>

        </Row>
      </Container>
    </div>
  
    
     <Dialog open={open} onClose={() => setOpen(false)}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
          />
        </LocalizationProvider>
      </Dialog>
    </>
  );
};

export default Academic;
