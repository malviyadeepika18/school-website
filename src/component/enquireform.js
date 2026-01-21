import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Row,
  Col,
} from "reactstrap";

const Enquireform = ({ open, toggle }) => {
const navigate =useNavigate();
const routerlocation = useLocation();
 const [formData ,setFromData] = useState ({
  studentName:"",
  state:"",
  email:"",
  city:"",
  mobile:""

 })
useEffect(() => {
  if (routerlocation.state) {
    setFromData(routerlocation.state);
  
  }
},[routerlocation.state ,open])




const handleChange = (e) =>{
  const {name,value} =e.target;
  setFromData({...formData,[name]:value});
};

const handleSubmit = (e) => {
  e.preventDefault();
  navigate("/enquireform-view" , {state:formData});
}
  return (
    <>
      <Modal isOpen={open} toggle={toggle} centered size="lg">
        <ModalHeader toggle={toggle} className="enquiry-header">
          Admission Enquiry
        </ModalHeader>

        <ModalBody>
          <Form className="enquiry-form" onSubmit={handleSubmit}>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Student Name *</Label>
                  <Input type="text" name="studentName" placeholder="Enter student name" value={formData.studentName} onChange={handleChange} required/>
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>Select State *</Label>
                  <Input type="select"name="state" value={formData.state} onChange={handleChange} required>

                     <option value="">Select State</option>
                  <option value="Delhi">Delhi</option>
                  <option value="UP">UP</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label> Email *</Label>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" required/>
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>Select City *</Label>
                  <Input type="select" name="city" value={formData.city} onChange={handleChange} required>
                        <option value="">Select City</option>
                  <option value="Noida">Noida</option>
                  <option value="Delhi">Delhi</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Mobile Number *</Label>
                  <Input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter phone number" required />
                </FormGroup>
              </Col>
            </Row>

            <div className="text-center mt-3">
              <Button className="org-btn">Submit</Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Enquireform;
