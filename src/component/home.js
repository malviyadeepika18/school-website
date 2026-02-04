import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Button } from "@mui/material";
import kidsimg from "../image/kids.avif";
import { NavLink } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import imagekidss from "../image/WhatsApp Image 2026-02-04 at 10.32.15 AM (2).jpeg";
import Enquireform from "../component/enquireform";
import valueimg from "../image/core-values.png";
import awardimg from "../image/sports-trophy.png";
import starimg from "../image/star.png";
import studentimgesss from "../image/imgstudnt.jpeg";
import parentsimgesss from "../image/parentss.jpeg";
import yogaimge from "../image/WhatsApp Image 2026-02-04 at 10.32.03 AM (2).jpeg";
import polaimg from "../image/WhatsApp Image 2026-02-04 at 10.32.20 AM.jpeg";

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

const Home = () => {
  const testimonials = [
    {
      name: "Geeta K. Shahare",
      role: "Parent",
      image: parentsimgesss,
      text: "Teachers are very supportive and attentive.",
    },
    {
      name: "Trupati C. Thakre",
      role: "Student",
      image: studentimgesss,
      text: "The teachers here are very supportive and always encourage us to do our best. I enjoy coming to school every day.",
    },
  ];

  return (
    <>
      <Enquireform />

      <section
        className="hero-section"
        style={{ "--hero-img": `url(${kidsimg})` }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md="6">
              <div className="hero-content-box">
                <h1>Empowering Tomorrow’s Leaders</h1>
                <p>Inspiring Excellence in Education</p>

                <Button
                  variant="contained"
                  className="me-3 white-btn"
                  component={NavLink}
                  to="/about-us"
                >
                  Learn More
                </Button>
                <Button
                  variant="contained"
                  component={NavLink}
                  to="/admissions"
                  className="org-btn"
                >
                  Admissions Open
                </Button>
              </div>
            </Col>
            <Col md="6" />
          </Row>
        </Container>
      </section>

      <Container className="my-5">
        <div className="testimonial-header">
          <div className="header-icons">
            <span className="dot blue"></span>
            <span className="dot orange"></span>
          </div>
          <h3 className="section-title">About Us</h3>
        </div>
        <Row>
          <Col md="4">
            <Card className="info-card mb-4">
              <CardBody className="card-body-fixed">
                <h5>Our Mission</h5>

                <ul className="mission-list">
                  <li>
                    Provide quality education as per Maharashtra Board
                    curriculum.
                  </li>
                  <li>
                    Encourage curiosity, creativity, and critical thinking.
                  </li>
                  <li>
                    Create a safe, disciplined, and child-friendly learning
                    environment.
                  </li>
                  <li>
                    Support overall development — academic, emotional, physical
                    & social.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>

          <Col md="4">
            <Card className="info-card mb-4">
              <CardBody className="card-body-fixed">
                <h5>Our Vision</h5>
                <p>
                  To empower students with knowledge, confidence, and values
                  that prepare them for lifelong success and responsible
                  citizenship.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <Card className="info-card mb-4">
              <CardBody className="card-body-fixed d-flex align-items-center">
                <img src={valueimg} alt="Values" className="heading-icon" />

                <div className="ms-4">
                  <h5 className="mb-1 value-title">Our Values</h5>
                  <span className="value-underline"></span>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md="4">
            <Card className="info-card mb-4">
              <CardBody className="card-body-fixed d-flex align-items-center">
                {/* Icon */}
                <img src={awardimg} alt="Awards" className="heading-icon" />

                {/* Text */}
                <div className="ms-4">
                  <h5 className="mb-1">25+</h5>
                  <p className="mb-0 text-muted">Awards & Achievements</p>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md="4">
            <Card className="info-card mb-4">
              <CardBody className="card-body-fixed d-flex align-items-center">
                {/* Icon */}
                <img src={starimg} alt="Experience" className="heading-icon" />

                {/* Text */}
                <div className="ms-4">
                  <h5 className="mb-1">4+ Years</h5>
                  <p className="mb-0 text-muted">Of academic excellence</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="section-addmission half-circle-wrapper">
        <div className="half-circle-bg"></div>
        <Container className="my-5 content-over-bg ">
          <h3 className="section-title-right">Admissions</h3>

          <Row>
            <Col md="4">
              <Card className="info-card mb-4">
                <CardBody>
                  <span className="step-number">1</span>
                  <h5>Admission Form</h5>

                  <Button
                    className="org-btn"
                    component={NavLink}
                    to="/admission-form"
                  >
                    Enquire Now
                  </Button>
                </CardBody>
              </Card>
            </Col>

            <Col md="4">
              <Card className="info-card  mb-4">
                <CardBody>
                  <span className="step-number">2</span>
                  <h5>Survey Form</h5>

                  <Button
                    className="org-btn"
                    component={NavLink}
                    to="/servey-form"
                  >
                    Enquire Now
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="info-card  mb-4">
                <CardBody>
                  <span className="step-number">3</span>
                  <h5>Receipt To Enrollment</h5>

                  <Button
                    className="org-btn"
                    to="/receipt-form"
                    component={NavLink}
                  >
                    Enquire Now
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section-academic">
        <Container className="my-5">
          <div className="testimonial-header">
            <div className="header-icons">
              <span className="dot blue"></span>
              <span className="dot orange"></span>
            </div>
            <h3 className="section-title">Academic Programs</h3>
          </div>

          <Row className="mt-4">
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
            ))}

            <Col xs="12" className="text-center mt-4">
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

      <section className="testimonial-section  half-circle-wrapper">
        <div className="half-circle-bg"></div>
        <Container className="content-over-bg">
          <h3 className="section-title-right  mb-5">Testimonial</h3>

          <Row className="justify-content-center">
            {testimonials.map((item, index) => (
              <Col md="5" key={index} className="mb-4">
                <Card className="testimonial-card">
                  <CardBody>
                    <div className="testimonial-header">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h6>{item.name}</h6>
                        <span className="section-font">{item.role}</span>
                      </div>
                    </div>

                    <p className="testimonial-text">“{item.text}”</p>

                    <div className="stars">★★★★★</div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
