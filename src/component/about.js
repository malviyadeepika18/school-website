import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import valueimg from "../image/core-values.png";
import awardimg from "../image/sports-trophy.png";
import starimg from "../image/star.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about-header-full">
        <Container>
          <div className="testimonial-header text-center justify-content-center">
            <div className="header-icons">
              <span className="dot blue"></span>
              <span className="dot orange"></span>
            </div>

            <h3 className="section-title text-white">About Us</h3>
          </div>
        </Container>
      </div>

      <div className="kid-background ">
        <Container className="my-5   ">
          <Row className=" align-items-center my-5">
            <Col md="6">
              <img
                src={require("../image/kids.avif")}
                alt="Children Learning"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md="6" className="about-content">
              <h2 className="offer-title">
                {" "}
                We Learn Smart Way To Build Bright Future For Your Children
              </h2>
              <p>
                <strong>KID'S RITES INTERNATIONAL SCHOOL</strong>, is a
                nurturing educational institution committed to academic
                excellence and holistic child development. Affiliated with the
                Maharashtra State Board, our school focuses on building strong
                foundations, moral values, and life skills in young learners.
              </p>
              <span>
                We believe every child is unique and deserves an environment
                where learning is joyful, safe, and meaningful.
              </span>
              <Row>
                <Col md="6">
                  <ul className="about-list">
                    <li>✔ Qualified Teachers</li>
                    <li>✔ Outdoor Games</li>
                    <li>✔ Safe & Secure Campus</li>
                  </ul>
                </Col>

                <Col md="6">
                  <ul className="about-list">
                    <li>✔ Creative Learning</li>
                    <li>✔ Friendly Environment</li>
                    <li>✔ Sport Activites</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Row>
              <Col md="6" className="">
                <h2 className="offer-title">Academics</h2>
                <p>
                  We offer structured academic programs following Maharashtra
                  State Board guidelines:
                </p>
                <ul className="about-list">
                  <li>✔ Pre-Primary (Nursery, Jr. KG, Sr. KG)</li>
                  <li>✔ Primary School</li>
                  <li>✔ Middle School</li>
                </ul>
                <span>
                  Our teaching approach ensures conceptual clarity and strong
                  academic foundations.
                </span>
              </Col>

              <Col md="6" className="">
                <h2 className="offer-title">Co-Curricular Activities</h2>
                <p>
                  We offer structured academic programs following Maharashtra
                  State Board guidelines:
                </p>
                <Row>
                  <Col md="6">
                    <ul className="about-listss">
                      <li>✔ Art & Craft</li>
                      <li>✔ Outdoor Games</li>
                      <li>✔ Music & Dance</li>
                    </ul>
                  </Col>

                  <Col md="6">
                    <ul className="about-listss">
                      <li>✔ Sports & Physical Activities</li>
                      <li>✔ Friendly Environment</li>
                      <li>✔ Yoga & Meditation</li>
                    </ul>
                  </Col>
                  <span>
                    These activities help students grow beyond textbooks.
                  </span>
                </Row>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col md="12" className="">
              <h2 className="offer-title">Admissions Open</h2>
              <p>
                <strong>
                  We welcome parents to visit our campus and experience our
                  learning environment.
                </strong>
              </p>
              <p>
                <strong>
                  Admissions Open :-
                  <Link to="/admissions" className="cta-btn primary">
                    Apply Now
                  </Link>
                </strong>
              </p>

              <p>
                <strong>
                  Contact Us for More Information :-
                  <Link to="/contact" className="cta-btn secondary">
                    Contact Us
                  </Link>
                </strong>
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
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
                      Support overall development — academic, emotional,
                      physical & social.
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
                  <img
                    src={starimg}
                    alt="Experience"
                    className="heading-icon"
                  />

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
      </div>
    </>
  );
};

export default About;
