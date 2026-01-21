import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Button } from "@mui/material";
import kidsimg from "../image/kids.avif";
import { NavLink } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import imagekidss from "../image/kids.avif";
import Enquireform from "../component/enquireform";
import valueimg from "../image/core-values.png";
import awardimg from "../image/sports-trophy.png";
import starimg from "../image/star.png";

const Home = () => {
  const testimonials = [
    {
      name: "Anita Sharma",
      role: "Parent",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "My child loves the school and is excelling in studies. Wonderful environment!",
    },
    {
      name: "Rahul Mehta",
      role: "Student",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I have made amazing friends and learned so much here. Teachers are very supportive",
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

                <Button variant="contained" className="me-3 white-btn">
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
                <p>
                  To provide quality education and foster holistic development.
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md="4">
            <Card className="info-card mb-4">
              <CardBody className="card-body-fixed">
                <h5>Our Vision</h5>
                <p>
                  To provide quality education and foster holistic development.
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
                  <h5 className="mb-1">300+</h5>
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
                  <h5 className="mb-1">25+ Years</h5>
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
                      <Card className="info-card">
                        <CardBody>
                          <span className="step-number">1</span>
                          <h5>Admission Form</h5>
                          {/* <p>Students appear for an age-appropriate assessment.</p> */}
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
                      <Card className="info-card">
                        <CardBody>
                          <span className="step-number">2</span>
                          <h5>Survey Form</h5>
                          {/* <p>Complete the admission with interaction and enrollment.</p> */}
                          <Button className="org-btn"  component={NavLink}
            to="/servey-form">
                  Enquire Now
                </Button>
                        </CardBody>
                      </Card>
                    </Col>
                      <Col md="4">
                      <Card className="info-card">
                        <CardBody>
                          <span className="step-number">3</span>
                          <h5>Receipt To Enrollment</h5>
                          {/* <p>Complete the admission with interaction and enrollment.</p> */}
                          <Button className="org-btn" to="/receipt-form" component={NavLink}>
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
            <Col md="4">
              <Card className="academic-card">
                <div className="academic-img-wrapper">
                  <img src={imagekidss} alt="Science Fair" />
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
              <Card className="academic-card">
                <div className="academic-img-wrapper">
                  <img src={imagekidss} alt="Science Fair" />

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
              <Card className="academic-card">
                <div className="academic-img-wrapper">
                  <img src={imagekidss} alt="Science Fair" />
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
