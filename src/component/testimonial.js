import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import Parentimg from "../image/WhatsApp Image 2026-02-04 at 10.31.55 AM (1).jpeg"
import studentimge from "../image/student.jpeg"
import img9 from "../image/WhatsApp Image 2026-02-04 at 10.32.12 AM (2).jpeg";
import studentimgesss from "../image/imgstudnt.jpeg"
import parentsimgesss from "../image/parentss.jpeg"


const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Parent",
    image: Parentimg,
    text:
      "My child loves the school and is excelling in studies. Wonderful environment!",
  },
  {
   
      name: "Anita Sharma",
    role: "Student",
    image: studentimge,
    text:
      "I have made amazing friends and learned so much here. Teachers are very supportive",
      
  },
   {
   
      name: "Aditi Deshmukh",
    role: "Student",
    image: img9,
    text: 'This school has helped me gain confidence and improve my academic performance.The learning environment is excellent',
      
  },
   {
   
      name: "Trupati C. Thakre",
    role: "Student",
    image: studentimgesss,
    text:
      "The teachers here are very supportive and always encourage us to do our best. I enjoy coming to school every day.",
      
  },
  {
   
      name: "Geeta K. Shahare",
    role: "Parent",
    image: parentsimgesss,
    text:
     " Teachers are very supportive and attentive.",
      
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
