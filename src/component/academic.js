
import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Navbar } from "reactstrap";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Footer from "../component/footer"
import imagekidss from "../image/kids.avif"
import { Dialog, IconButton } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Academic = () => {

const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs("2024-07-15"));

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
          <Col md="4">
  <Card className="academic-card mt-5">
    <div className="academic-img-wrapper">
      <img
        src={imagekidss}
        alt="Science Fair"
      />
     

            <div className="calendar-badge">
     <IconButton
  onClick={() => setOpen(true)}
  sx={{ color: "#ff9800", padding: 0 }}
>
  <CalendarMonthIcon className="calendar-icon" />
</IconButton>


        <span>{selectedDate.format("MMMM DD, YYYY")}</span>
      </div>

      <div className="academic-overlay">
        <h5>Science Fair</h5>
      
      </div>
    </div>
  </Card>
</Col>
 <Col md="4">
  <Card className="academic-card mt-5">
    <div className="academic-img-wrapper">
      <img
         src={imagekidss}
        alt="Science Fair"
      />

       <div className="calendar-badge">
        <CalendarMonthIcon className="calendar-icon" />
        <span>July 15, 2024</span>
      </div>
      <div className="academic-overlay">
        <h5>Science Fair</h5>
       
      </div>
    </div>
  </Card>
</Col>
 <Col md="4">
  <Card className="academic-card mt-5">
    <div className="academic-img-wrapper">
      <img
        src={imagekidss}
        alt="Science Fair"
      />
        <div className="calendar-badge">
        <CalendarMonthIcon className="calendar-icon" />
        <span>July 15, 2024</span>
      </div>
      <div className="academic-overlay">
        <h5>Science Fair</h5>
      </div>
    </div>
  </Card>
</Col><Col xs="12" className="text-center mt-4">
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
