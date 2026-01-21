
import { Container, Row, Col, Card, CardBody,Button } from "reactstrap";
import valueimg from "../image/core-values.png"
import awardimg from "../image/sports-trophy.png"
import starimg from "../image/star.png"

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

            <h3 className="section-title text-white">
              About Us
            </h3>
          </div>
        </Container>
      </div>

      <div className="kid-background ">
      <Container className="my-5   ">
     <Row className=" align-items-center my-5">
  <Col md="6">
    <img 
      src={require('../image/kids.avif')} 
      alt="Children Learning" 
      className="img-fluid rounded shadow"
    />
  </Col>
 <Col md="6" className="about-content">
    {/* <h3 className="section-title mb-3">About Us</h3> */}
    <h2 className="offer-title" > We Learn Smart Way To Build Bright Future For Your Children</h2>
    <p>
          At <strong>KID'S RITES INTERNATIONAL SCHOOL</strong>, we believe every child has the
          potential to shine. Our school provides a safe, creative, and joyful
          learning environment where children grow confidently.
        </p>
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

    

            <Button variant="contained" className="org-btn">
           More Details
          </Button>
  </Col>
</Row>

        <Row className="justify-content-center">
          <Col md="4">
            <Card className="info-card mb-4">
              <CardBody  className="card-body-fixed">
                <h5>Our Mission</h5>
                <p>To provide quality education and foster holistic development.</p>
             
              </CardBody>
            </Card>
          </Col>

          <Col md="4">
            <Card className="info-card mb-4">
           <CardBody  className="card-body-fixed">
                <h5>Our Vision</h5>
                <p>To provide quality education and foster holistic development.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <Card className="info-card mb-4">
             <CardBody  className="card-body-fixed d-flex align-items-center">
                <img
        src={valueimg}  
        alt="Values"
        className="heading-icon"
      />
            
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
      <img
        src={awardimg}
        alt="Awards"
        className="heading-icon"
      />

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
      <img
        src={starimg}
        alt="Experience"
        className="heading-icon"
      />

      {/* Text */}
      <div className="ms-4">
        <h5 className="mb-1">25+ Years</h5>
        <p className="mb-0 text-muted">Of academic excellence</p>
      </div>

    </CardBody>
  </Card>
</Col>

        </Row>
      </Container></div>
    </>
  );
};

export default About;
