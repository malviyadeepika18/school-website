
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { useLocation, useNavigate,Link } from "react-router-dom";
import logoimg from "../image/WhatsApp Image 2025-12-19 at 5.38.15 PM.jpeg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
function Receiptform() {
  const navigate = useNavigate();
  const { state } =useLocation();

  const [data, setData] = useState({
    formNo: "",
    date: "",
    studentName: "",
    className: "",
    parentName: "",
    amount: "",
    amountWords: "",
  });

useEffect(() => {
  if(state) {
    setData (state)
  }
},[state]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/receipt-form-view", { state: data });
  };

  return (
    <Container className="mt-4">
      <Card>
          <CardBody>
                  
            <div className="school-header">
              <div className="header-row">
                <div className="logo-box">
                  <img
                    src={logoimg}
                    alt="school-logo"
                    className="school-logo"
                  />
                </div>
                <div className="school-details">
                  <h1 className="school-name-style">
                    KID'S RITES INTERNATIONAL SCHOOL
                  </h1>
                  <p className="affiliated">
                    Affiliated by: Council of Universal Buddhist University
                  </p>
                  <p>Run by</p>
                  <p className="runby">
                    <strong>
                      Youth Welfare and Cultural Organisation, Nagpur
                    </strong>
                  </p>
                  <p className="registration">
                    (Govt. of Maharashtra Regd. No. - S. R. Act 1860 -
                    MAH-1124/12(N), B.P.T. Act 1950 - F-27429 (Nag))
                  </p>

                  <p className="address">
                    Address: Plot No. 3, Maa Kali Nagar, Pawanagon Road, Ghongad
                    Kamtee, Nagpur - 441001 (MH)
                  </p>

                  <p className="contact">
                    Office Contact No.: 9112398739 / 9096944337
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

      <Card>
        <CardBody>
         <div className="back-action">
                 <Tooltip title="Go Back" arrow>
  <IconButton component={Link} to="/admissions">
    <ArrowBackIcon />
  </IconButton>
</Tooltip>
<span className="back-text">Back</span>
                
                </div>

          <form onSubmit={handleSubmit}>
           

             <h2 className="mb-4 mt-4 text-center">Receipt to Enrollment</h2>
            <p className=" text-center">
              <strong>SESSION 2026-2027</strong>
            </p>
            <Row className="mb-3">
              <Col md="6" className="d-flex align-items-center">
                <Label className="me-2 fw-bold">Form No:</Label>
                <Input
                  type="text"
                  placeholder="Enter Form No"
                  style={{ maxWidth: "200px" }}
                  name="formNo" onChange={handleChange}value={data.formNo}  required 
                />
              </Col>
              <Col
                md="6"
                className="d-flex justify-content-end align-items-center"
              >
                <Label className="me-2 fw-bold">Date:</Label>
                <Input type="date" style={{ maxWidth: "200px" }} name="date" onChange={handleChange}     value={data.date} required
                  />
            
              </Col>
            </Row>
<p className="declaration-para">
            <p>
              Full Name of Student :
              <input
                name="studentName"
                // className="inline-input"
                 className="declaration-input"
                onChange={handleChange}
                value={data.studentName}
              />
            

            
              Class :
              <input
                name="className"
                // className="inline-input small"
                 className="declaration-input"
                onChange={handleChange}
                value={data.className}
              />
            
              Receipt with thanks from Mr./Mrs.
              <input
                name="parentName"
                // className="inline-input"
                 className="declaration-input"
                onChange={handleChange}
                  value={data.parentName}
              />
               for an amount of Rs.
              <input
                name="amount"
                // className="inline-input small"
                 className="declaration-input"
                onChange={handleChange}
                   value={data.amount}
              />
              (In Words 
              <input
                name="amountWords"
                // className="inline-input"
                 className="declaration-input"
                onChange={handleChange}
                   value={data.amountWords}
              />
            Rupees only) towards for enrollment to the school.
            </p></p>
<Row>
              {" "}
              <Col md="12" className="text-end">
                <div className="text-center mt-4">
                  <span>
                    <strong>Principal</strong>
                  </span>
                  <div>
                    <strong>KID'S RITES INTERNATIONAL SCHOOL</strong>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="text-center mt-4">
              <Button type="submit" className="org-btn">
                {state ? "Update " : "Submit"}
                
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Receiptform;
