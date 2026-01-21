




import { Container, Row, Col } from "reactstrap";
import { Button } from "@mui/material";
import kidsimg from "../image/kids.avif";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
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

          <Button variant="contained"        component={NavLink}
          to="/admissions" className="org-btn">
            Admissions Open
          </Button>
        </div>
      </Col>
      <Col md="6" />
    </Row>
  </Container>
</section>

  );
};

export default Hero;

