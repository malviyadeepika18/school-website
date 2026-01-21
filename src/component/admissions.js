
import React, { useEffect, useState } from "react"
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Button } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import Enquireform from "../component/enquireform";

const Admissions = () => {

  // const [open,setOpen] = useState(false);
  // const routerLocation  = useLocation();
  // const toggleModal = () => setOpen(!open);
 
  // useEffect(() =>{
  //   if(routerLocation .state){
  //     setOpen(true);
  //   }
  // },[routerLocation .state]);

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
              Admissions
            </h3>
          </div>
        </Container>
      </div>

    <div className="section-addmission half-circle-wrapper">
     
      <Container className="my-5 content-over-bg ">
      
        

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
 {/* <Enquireform open={open} toggle={toggleModal} /> */}
      </>
  );
};

export default Admissions;
