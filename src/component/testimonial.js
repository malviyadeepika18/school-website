import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";


const testimonials = [
  {
    name: "Anita Sharma",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "My child loves the school and is excelling in studies. Wonderful environment!",
  },
  {
    name: "Rahul Mehta",
    role: "Student",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text:
      "I have made amazing friends and learned so much here. Teachers are very supportive",
      
  },
];

const Testimonial = () => {
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
        Testimonial
            </h3>
          </div>
        </Container>
      </div>



    <section className="testimonial-section  half-circle-wrapper">
    
      <Container className="content-over-bg">
        
        

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

                  <p className="testimonial-text">
                    “{item.text}”
                  </p>

                  <div className="stars">
                    ★★★★★
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section></>
  );
};

export default Testimonial;
